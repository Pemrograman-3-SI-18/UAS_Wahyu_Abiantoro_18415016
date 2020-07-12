<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-blue-grey">
    <q-card flat class="bg-white q-pa-md">
      <div class="q-pa-md">
        <q-form class="q-gutter-md">

          <div class="q-gutter-md-2 offset-1 col-xs-2" align="center">
            Silahkan Masukan Order Anda
          </div>

          <q-form
            @submit="onSubmit"
            class="q-gutter-md">

            <q-input
              label="Halo!"
              lazy-rules
              color="teal"
              v-model= "form.userName"
              :rules="[val => val !== null && val !== '' || 'Perlu Di Isi User MU nih']">
              <template v-slot:append>
                <q-icon name="my_location"/>
              </template>
            </q-input>

            <q-input
              label="Kamu sudah menemukan mekanik nih."
              lazy-rules
              color="teal"
              v-model= "form.idDriver"
              :rules="[val => val !== null && val !== '' || 'Tanya Driver']">
              <template v-slot:append>
                <q-icon name="my_location"/>
              </template>
            </q-input>

            <q-input
              label="Lokasi Anda"
              lazy-rules
              color="teal"
              v-model="form.jemput"
              :rules="[val => val !== null && val !== '' || 'Lokasi Penjemputan Dibutuhkan']">
              <template v-slot:append>
                <q-icon name="my_location"/>
              </template>
            </q-input>

            <q-input
              label="Ada kendala apa dengan kendaraanmu?"
              lazy-rules
              color="teal"
              v-model="form.tujuan"
              :rules="[val => val !== null && val !== '' || 'Alamat Tujuan Antar Dibutuhkan']">
              <template v-slot:append>
                <q-icon name="edit_location"/>
              </template>
            </q-input>

            <q-input
              label="Harga Servis"
              lazy-rules
              color="teal"
              v-model="form.harga"
              :rules="[val => val !== null && val !== '' || 'Harga Dibutuhkan']">
              <template v-slot:append>
                <q-icon name="edit_location"/>
              </template>
            </q-input>

          </q-form>

          <div>
            <q-btn
              unelevated
              icon="directions_bike"
              label="Yuk, Berangkat !"
              type="submit"
              style="height: 50px"
              color="teal"/>
            <q-tooltip>Hati Hati Di Perjalanan, Jangan Lupa Berdoa</q-tooltip>

          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: null,
        idDriver: null,
        jemput: null,
        tujuan: null,
        harga: null
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/customer/transaksi')
    }

  }
}
</script>

<style scoped>

</style>
