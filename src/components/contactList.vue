<template>
    <div class="container">
        <div v-if="items.length > 0" class="mt-5">
            <div class="row">
                <div class="input-field col row align-items-center justify-content-center">
                    <input v-model="find" placeholder="Поиск" id="first_name" type="text" class="validate w-75">
                    <button class="waves-effect waves-light btn-small ml-2" @click="search">Найти</button>
                </div>
            </div>
            <div v-if="error" class="mb-3"><span>Результатов не найдено</span></div>
            <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th @click="sortById">
                    #
                    <span v-show="this.sortId === true" class="material-icons">arrow_upward</span>
                    <span v-show="this.sortId === false" class="material-icons">arrow_upward</span>
                        </th>
                    <th v-for="(item,key) in columns" :key="key"
                    @click="change(key)"
                    >
                    {{item}}
                    <span v-show="changeFlag === true" class="material-icons">arrow_upward</span>
                    <span v-show="changeFlag === false" class="material-icons">arrow_downward</span>
                    </th>
                </tr>
            </thead>
                <contactListItems :items='displayedPosts' @showModal="showModal" />
            </table>
        </div>
        <transition name="modal" v-if="isActive">
        <div class="modal-mask">
          <div class="modal-wrapper" @click.self="isActive = !isActive">
                <div class="modal-container">
                <div class="modal-header">
                    Контактные данные
                </div>

                <div class="modal-body">
                    <div class="mb-1">Имя: <span>{{getUser.name}}</span></div>
                    <div>Адрес: <span>{{getUser.adress}}</span></div>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                    <button class="modal-default-button btn red" @click="isActive = !isActive">
                        Закрыть
                    </button>
                    </slot>
                </div>
                </div>
            </div>
        </div>
        </transition>
        <button class="btn_get-items waves-effect waves-light btn-small" @click="getData" v-if="this.btnVisible">Загрузить данные</button>
        <div class="preloader-wrapper big active" v-if="this.loading">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
            </div>
        </div>
        <div>
        </div>
        <div class="row justify-content-center" v-show="isPagination">
        <ul class="pagination">
            <li class="waves-effect"><a href="#!" @click="page = 1"><span class="material-icons">first_page</span></a></li>
            <li class="waves-effect"><a href="#!" v-if="page != 1" @click="page--"><i class="material-icons">chevron_left</i></a></li>
            <li class="waves-effect" :class="{active: page == pageNumber}" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"><a href="#!">{{pageNumber}}</a></li>
            <li class="waves-effect" @click="page++" v-if="page < pages.length"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
            <li class="waves-effect"><a href="#!" @click="page = pages.length"><span class="material-icons">last_page</span></a></li>
        </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import contactListItems from '@/components/contactListItems'

export default {
    data: function() {
        return {
            columns: {
                fullname: 'Fullname',
                uname: 'Username',
                company: 'Company',
                email: 'E-mail',
                state: 'State'
            },
            items: [],
            loading: false,
            btnVisible: true,
            page: 1,
            perPage: 50,
            pages: [],
            find: '',
            getUser: {
                name: '',
                adress: ''
            },
            isActive: false,
            error: false,
            changeFlag: false,
            sortId: false,
            isPagination: false
        }
    },
    methods: {
        getData() {
            this.btnVisible = false
            this.loading = true
            axios.get('http://www.filltext.com/?rows=1000&id={index}&fullname={firstName}~{lastName}&company={business}&email={email}&uname={username}&address={addressObject}')
                .then(response => {
                    this.loading = false
                    this.items = response.data
                    this.isPagination = true
                })
        },
        setPages () {
            let numberOfPages = Math.ceil(this.items.length / this.perPage);
            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index);
            }
        },
        paginate (items) {
            let page = this.page
            let perPage = this.perPage
            let from = (page * perPage) - perPage
            let to = (page * perPage)
            return items.slice(from, to)
        },
        change (key) {
            if (this.changeFlag === false) {
                this.changeFlag = true
                this.items.sort((a, b) => {
                    a = a[key].toLowerCase()
                    b = b[key].toLowerCase()
                    if (a > b) return 1
                    if (a < b) return -1
              })
            } else {
                this.changeFlag = false
                this.items.sort((a, b) => {
                    a = a[key].toLowerCase()
                    b = b[key].toLowerCase()
                    if (a > b) return -1
                    if (a < b) return 1
              })
            }
        },
        sortById () {
            if (this.sortId === false) {
                this.sortId = true
                this.items.sort((a, b) => {
                if (a.id > b.id) return -1
                if (a.id < b.id) return 1
            })
            } else {
                this.sortId = false
                this.items.sort((a, b) => {
                if (a.id > b.id) return 1
                if (a.id < b.id) return -1
            })
            }
        },
        search () {
            this.isPagination = false
            if (this.find != '') {
                this.error = false
                this.items = this.items.filter(item => {
                    for (let key in item) {
                        if (String(item[key]).indexOf(this.find) !== -1) {
                            return true
                        }
                    }
                })

                if (this.items.length == 0) {
                    this.error = true
                    this.find = ''
                    this.getData()
                }
            } else {
                this.error = false
                this.items = []
                this.getData()
            }
        },
        showModal (id) {
            this.isActive = true
            this.items.find((array) => {
                if (array.id == id) {
                    this.getUser.name = array.fullname
                    this.getUser.adress = array.address.zip + ', ' + array.address.state + ', ' + array.address.city + ', ' + array.address.streetAddress 
                }                
            })
        }
    },
    mounted () {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 27) {
                this.isActive = false
            }
        })
    },
    watch: {
        items() {
            this.setPages()
        }
    },
    computed: {
        displayedPosts () {
            return this.paginate(this.items)
        }
    },
    components: {
        contactListItems
    }
}
</script>

<style lang="scss">

.btn_get-items, .preloader-wrapper {
    margin-top: 45vh;
}

.waves-effect a span {
    margin-top: 0.2rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  color: #42b983;
  font-weight: 700;
}

.modal-body {
  margin: 20px 0;
  font-weight: 700;
}

.modal-default-button {
    color: white !important;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

tr {
    cursor: pointer;
}

th > span.material-icons {
    font-size: 15px;
}
</style>