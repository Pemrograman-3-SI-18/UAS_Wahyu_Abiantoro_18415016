<template>
  <q-page >
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Tambah Data Karyawan" to="/inputdatakaryawan" />
          <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="kodekaryawan" :props="props">
              {{ props.row.kodekaryawan }}
            </q-td>
            <q-td key="nama" :props="props">{{ props.row.nama }}</q-td>
            <q-td key="jadwalmasuk" :props="props">{{ props.row.jadwalmasuk }}</q-td>
            <q-td key="jadwallibur" :props="props">{{ props.row.jadwallibur }}</q-td>
            <q-td key="tahunmasuk" :props="props">{{ props.row.tahunmasuk }}</q-td>
            <q-td key="totalgaji" :props="props">{{ props.row.totalgaji }}</q-td>
            <q-td key="gambar" :props="props">
              <q-img :src="baseUrl + props.row.gambar" style="width: 50px; height: 50px"/>
            </q-td>
            <q-td key="action" :props="props">
              <div class="justify-center q-gutter-x-xs">
                <q-btn color="teal"
                       dense size="sm"
                       class="q-px-xs"
                       icon="edit"
                       @click="edit(props.row.kodekaryawan)"
                       label="Edit"></q-btn>
                <q-btn
                  color="red"
                  dense
                  size="sm"
                  @click="hapusDataServis(props.row._id)"
                  class="q-px-xs"
                  icon="delete"
                  label="Hapus"></q-btn>
              </div>
            </q-td>
          </q-tr>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: 'http://localhost:2020/gambar/',
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'kodekaryawan',
          required: true,
          label: 'Kode Karyawan',
          align: 'left',
          field: row => row.kodekaryawan,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nama', align: 'left', label: 'Nama', field: 'nama', sortable: true },
        { name: 'jadwalmasuk', align: 'left', label: 'Jadwal Masuk', field: 'jadwalmasuk' },
        { name: 'jadwallibur', align: 'left', label: 'Jadwal Libur', field: 'jadwallibur' },
        { name: 'tahunmasuk', align: 'left', label: 'Tahun Masuk', field: 'tahunmasuk' },
        { name: 'totalgaji', align: 'left', label: 'Total Gaji', field: 'totalgaji' },
        { name: 'gambar', label: 'Gambar', align: 'center', field: 'gambar' },
        { name: 'action', align: 'center', label: 'Action', field: 'action', sortable: true }
      ],

      data: []
    }
  },

  methods: {
    // emulate fetching data from server
    getDataServis () {
      this.$axios.get('/servis/dataservis')
        .then((res) => {
          this.data = res.data.data
        })
    },
    hapusDataServis (_id) {
      this.$axios.delete('/servis/hapus/' + _id)
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: 'Barhasil Menghapus Data'
          })
          this.getDataServis()
        })
    },
    edit (kodekaryawan) {
      this.$router.push('/editdatakaryawan/' + kodekaryawan)
    }
  },
  mounted () {
    this.getDataServis()
  }
}
</script>
