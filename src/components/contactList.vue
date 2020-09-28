<template>
    <div class="container">
        <div v-if="items.length > 0" class="mt-5">
            <div class="row">
                <div class="input-field col row align-items-center justify-content-center">
                    <input v-model="query" placeholder="Поиск" id="first_name" type="text" class="validate w-75">
                    <button class="waves-effect waves-light btn-small ml-2" @click="search">Найти</button>
                </div>
            </div>
            <div class="row justify-content-center">
                <button class="waves-effect waves-light btn-small" @click="clearSearch" v-if="isPagination == false">Сбросить фильтр поиска</button>
            </div>
            <div v-if="error" class="mb-4"><span class="error">Результатов не найдено</span></div>
            <table class="table table-hover table-dark">
            <thead>
                <tr>
                    <th v-for="(item,key) in columns" :key="key"
                    @click="change(key)"
                    :class="{active: sortKey == key}"
                    >
                    {{item}}
                    <span class="arrow" :class="sortKey == key && changeFlag == true ? 'asc' : 'dsc'"></span>
                    </th>
                </tr>
            </thead>
                <contactListItems :items='displayedPosts' @showModal="showModal" />
            </table>
        </div>
        <modal
        :user="getUser"
        v-if="isActive"
        @closeModal="isActive = !isActive"
        />
        <button class="btn_get-items waves-effect waves-light btn-small" @click="getData" v-if="btnVisible">Загрузить данные</button>
        <loading
        v-if="loading"
        />
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
import modal from '@/components/modal'
import loading from '@/components/loading'

export default {
    data: function() {
        return {
            columns: {
                id: '#',
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
            perPage: 45,
            pages: [],
            query: '',
            getUser: {
                name: '',
                adress: ''
            },
            isActive: false,
            error: false,
            changeFlag: false,
            isPagination: false,
            sortKey: ''
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
            this.sortKey = key
            if (key === 'id') {
                if (this.changeFlag === false) {
                    this.changeFlag = true
                    this.items.sort((a, b) => {
                    if (a.id > b.id) return -1
                    if (a.id < b.id) return 1
                })
                } else {
                    this.changeFlag = false
                    this.items.sort((a, b) => {
                    if (a.id > b.id) return 1
                    if (a.id < b.id) return -1
                })
                }
            } else if (key === 'state') {
                if (this.changeFlag === false) {
                    this.changeFlag = true
                    this.items.sort((a, b) => {
                        a = a.address.[key].toLowerCase()
                        b = b.address.[key].toLowerCase()
                        if (a > b) return 1
                        if (a < b) return -1
                })
                } else {
                    this.changeFlag = false
                    this.items.sort((a, b) => {
                        a = a.address.[key].toLowerCase()
                        b = b.address.[key].toLowerCase()
                        if (a > b) return -1
                        if (a < b) return 1
                })
                }
            } else {
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
            }
        },
        search () {
            this.isPagination = false
            if (this.query != '') {
                this.error = false
                this.items = this.items.filter(item => {
                    for (let key in item) {
                        if (String(item[key]).indexOf(this.query) !== -1) {
                            return true
                        }
                    }
                })

                if (this.items.length == 0) {
                    this.error = true
                    this.query = ''
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
        },
        clearSearch () {
            this.query = ''
            this.items = []
            this.getData()
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
        contactListItems, modal, loading
    }
}
</script>

<style lang="scss">
th.active {
  color: grey;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #fff;
}

.arrow.dsc {
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #fff;
}

.btn_get-items, .preloader-wrapper {
    margin-top: 45vh;
}

.waves-effect a span {
    margin-top: 0.2rem;
}

tr {
    cursor: pointer;
}

th > span.material-icons {
    font-size: 15px;
}

.error {
    background-color: #26a69a;
    color: white;
    padding: 0.7rem;
    border-radius: 21px;
}
</style>