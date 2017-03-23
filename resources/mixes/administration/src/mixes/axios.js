import axios from 'axios';

export default function (injection, Vue) {
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axios.interceptors.request.use(configuration => configuration, error => {
        injection.debug.console.log(error);
        return Promise.reject(error);
    });
    axios.interceptors.response.use(response => response, error => {
        injection.debug.console.log(error);
        injection.debug.console.log(error.response);
        injection.debug.console.log(error.response.data);
        if (error.response.status === 401) {
            injection.vue.$router.push('/login');
        }
        if (error.response.status > 401 && error.response.status < 500) {
            injection.debug.console.log(error);
        } else {
            throw new Error(error);
        }
    });
    Object.defineProperties(injection, {
        http: {
            get() {
                return axios;
            },
        },
    });
    Object.defineProperties(Vue, {
        http: {
            get() {
                return axios;
            },
        },
    });
    Object.defineProperties(Vue.prototype, {
        $http: {
            get() {
                return axios;
            },
        },
    });
}
