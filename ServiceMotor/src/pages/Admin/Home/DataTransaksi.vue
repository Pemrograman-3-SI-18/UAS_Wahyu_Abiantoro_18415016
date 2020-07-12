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
          <span class="text-h5 text-weight-light q-pa-md">
            <span class="text-blue-grey-14">Data Transaksi</span>
          </span>
          <!--<q-btn color="teal" :disable="loading" label="Tambah Data Buku" to="/inputdatabuku" />-->
          <!-- <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" /> -->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Kode Transaksi',
          align: 'left',
          field: row => row.kodetransaksi,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'nama', align: 'center', label: 'Nama Customer', field: 'nama', sortable: true },
        { name: 'masalahkendaraan', align: 'center', label: 'Masalah Kendaraan', field: 'masalahkendaraan', sortable: true },
        { name: 'jeniskendaraan', align: 'center', label: 'Jenis Kendaraan', field: 'jeniskendaraan' },
        { name: 'jumlahpesanan', align: 'center', label: 'Jumlah Pesanan', field: 'jumlahpesanan' },
        { name: 'total', align: 'center', label: 'Total', field: 'total' }
      ],

      data: [
        {
          kodetransaksi: 'Trans-001',
          nama: 'Lia',
          masalahkendaraan: 'Pecah Ban',
          jeniskendaraan: 'Honda Revo',
          jumlahpesanan: '1',
          total: '30.000'
        },

        {
          kodetransaksi: 'Trans-002',
          nama: 'Mega',
          masalahkendaraan: 'Ganti Aki',
          jeniskendaraan: 'Honda Beat',
          jumlahpesanan: '1',
          total: '60.000'
        },

        {
          kodetransaksi: 'Trans-003',
          nama: 'Peter',
          masalahkendaraan: 'Ganti Lampu',
          jeniskendaraan: 'Honda Beat',
          jumlahpesanan: '1',
          total: '35.000'
        },

        {
          kodetransaksi: 'Trans-004',
          nama: 'Andre',
          masalahkendaraan: 'Ganti Aki',
          jeniskendaraan: 'Vario',
          jumlahpesanan: '1',
          total: '65.000'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
