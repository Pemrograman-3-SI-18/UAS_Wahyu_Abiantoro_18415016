<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Data Karyawan</span>
      </span>
      <div class="q-pa-md">
        <q-form
          @submit="onSubmit"
          class="q-gutter-md"
        >
          <q-input
            label="Kode Karyawan"
            lazy-rules
            color="teal"
            v-model="form.kodekaryawan"
            :rules="[
           val => val !== null && val !== '' || 'Kode Karyawan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>

          <q-input
            label="Nama Karywan"
            lazy-rules
            color="teal"
            v-model="form.nama"
            :rules="[
           val => val !== null && val !== '' || 'Judul Nama Karyawan Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>

          <q-input
            label="Jadwal Masuk"
            lazy-rules
            color="teal"
            v-model="form.jadwalmasuk"
            :rules="[
           val => val !== null && val !== '' || 'Jadwal Masuk Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>

          <q-input
            label="Jadwal Libur"
            lazy-rules
            color="teal"
            v-model="form.jadwallibur"
            :rules="[
           val => val !== null && val !== '' || 'Jadwal Libur Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>

          <q-input
            label="Tahun Masuk"
            lazy-rules
            color="teal"
            v-model="form.tahunmasuk"
            :rules="[
           val => val !== null && val !== '' || 'Tahun Masuk Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="calendar_today"/>
            </template>
          </q-input>

          <q-input
            label="Total Gaji"
            lazy-rules
            color="teal"
            v-model="form.totalgaji"
            :rules="[
           val => val !== null && val !== '' || 'Total Gaji Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="attach_money"/>
            </template>
          </q-input>

          <q-input
            lazy-rules
            hint="Pilih gambar"
            type="file"
            ref="file"
            @input="selectFile()"
            color="teal"
            :rules="[
           val => val !== null && val !== '' || 'Gambar Dibutuhkan'
           ]">
            <template v-slot:append>
              <q-icon name="add_photo_alternate"/>
            </template>
          </q-input>

          <div>
            <q-btn
              unelevated
              icon="add"
              label="Tambah Data Karyawan"
              style="height: 50px"
              type="submit"
              color="teal-6"/>
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
        kodekaryawan: null,
        nama: null,
        jadwalmasuk: null,
        jadwallibur: null,
        tahunmasuk: null,
        totalgaji: null
      },
      gambar: null
    }
  },
  methods: {
    selectFile () {
      this.gambar = this.$refs.file.$refs.input.files[0]
    },
    onSubmit () {
      const formData = new FormData()
      formData.append('gambar', this.gambar)
      formData.append('kodekaryawan', this.form.kodekaryawan)
      formData.append('nama', this.form.nama)
      formData.append('jadwalmasuk', this.form.jadwalmasuk)
      formData.append('jadwallibur', this.form.jadwallibur)
      formData.append('tahunmasuk', this.form.tahunmasuk)
      formData.append('totalgaji', this.form.totalgaji)
      this.$axios.post('/servis/input', formData)
        .then((res) => {
          if (res.data.error) {
            this.$q.notify({
              color: 'negative',
              message: res.data.msg,
              icon: 'ion-close'
            })
          } else {
            this.$q.notify({
              color: 'positive',
              message: res.data.msg,
              icon: 'ion-close'
            })
            this.$router.push('/')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
