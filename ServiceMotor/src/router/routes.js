
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      // autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/Admin/Home/DataKaryawan.vue') },
      { path: 'inputdatakaryawan', component: () => import('pages/Admin/Home/Inputdatakaryawan.vue') },
      { path: 'editdatakaryawan/:kodekaryawan', component: () => import('pages/Admin/Home/Editdatakaryawan.vue') },
      { path: 'datatransaksi', component: () => import('pages/Admin/Home/DataTransaksi.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/LoginRegistLayout.vue'),
    children: [
      { path: 'auth/login', component: () => import('pages/Admin/Users/Login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/Admin/Users/Registrasi.vue') }
    ]
  },

  {
    path: '/pembeli',
    component: () => import('layouts/PembeliLayout.vue'),
    meta: {
      // autentikasi: true
    },
    children: [
      { path: '', component: () => import('pages/Customer/order.vue') },
      { path: 'transaksi', component: () => import('pages/Customer/DataTransaksi.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
