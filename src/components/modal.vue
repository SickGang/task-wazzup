<template>
    <transition name="modal">
        <div class="modal-mask">
        <div class="modal-wrapper" @click.self="closeModal">
                <div class="modal-container">
                <div class="modal-header">
                    Контактные данные
                </div>

                <div class="modal-body">
                    <div class="mb-1">Имя: <span>{{user.name}}</span></div>
                    <div>Адрес: <span>{{user.adress}}</span></div>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                    <button class="modal-default-button btn-small waves-effect waves-light black" @click="closeModal">
                        Закрыть
                    </button>
                    </slot>
                </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ['user'],
    methods: {
        closeModal () {
            this.$emit('closeModal')
        }
    }
}
</script>

<style lang="scss">
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
  font-size: 1.5rem;
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
</style>