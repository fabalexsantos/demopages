
import {setCookie,getCookie,setCookieEx,delCookie} from '../utils/cookie'
export const state = () => {
  let state = {
    username:'',
    identity:0,//0用户，1验证者
    viewer:{
      name:'Robert William',
      email:'rwilliam@westdaleschool.org',
      img:'Robert William.png'
    },
    user:{
      name:'John Appleseed',
      email:'John1234@accuchain.com',
      img:'John Appleseed.png'
    },
    certificates:[//用户的证书情况
    // {
    //   img:'1.png',
    //   isValidated:true,
    //   des:'Atheletic Participation Award',
    //   time:'2015-2016'
    // },{
    //   img:'1.png',
    //   isValidated:true,
    //   des:'Academic Achievement Certificate in Computer Science',
    //   time:'2015-2016'
    // }
    ]
  }
  return state
}
export const mutations = {
  setUserName(state, {username}) {
    state.username = username
    if (!process.server) {
      setCookieEx('username', username, 9000000000)
    }
  },
  setIdentity(state,{identity}) {
    state.identity = identity
    if (!process.server) {
      setCookieEx('identity', identity, 9000000000)
    }
  },
  addCertificates(state,{certificate}){
    console.log(state.certificates)
    state.certificates.push(certificate)
    if (!process.server) {
      setCookie(`certificates`, JSON.stringify(state.certificates), 9000000000)
    }
  },
  setCertificates(state,{certificates}){
    state.certificates=certificates
    if (!process.server) {
      setCookieEx('certificates', JSON.stringify(certificates), 9000000000)
    }
  }
}
export const actions = {
  nuxtServerInit({ commit }, { req, res }) {
    var username=req.cookies.username
    var identity=req.cookies.identity||0
    let certificates=req.cookies.certificates||[]
    if(typeof(certificates)=='string'){
      certificates=JSON.parse(certificates)
    }
    commit('setIdentity', {
      identity: identity
    })
    commit('setCertificates', {
      certificates: certificates
    })
    if(username){
      commit('setUserName', {
        username: username||''
      })
    }

  }
}
