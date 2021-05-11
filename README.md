# platzi-exchange

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# Notes for Vue

# **Cripto-Currency**

Proyecto Básico con Vue 2 usando API CoinCap. Se usa las características básicas del framework como el Rendering declarativo y uso de componentes. Ademas se hace uso de Vue router para transformar lo que permite al proyecto ser una SPA (single page applicatión)

link al [sitio](https://cripto-exchange-iguanarepo.netlify.app)

- Algunos comandos para VUE CLI

  ```jsx
  //para crear proyecto vue
  vue create nombre-carpeta

  //para agregar plugin al proyecto
  vue add @ianaya89/vue-cli-plugin-tailwind

  //para ver el proyecto desde una interfaz grafica
  vue ui

  ```

- expresión - Atributo dinámico

  ```jsx
  <p> {{titulo}} </p>

  data() {
  	return:{
  		titulo: "hola mundo"
  	}
  }

  ```

  \*Atributo dinámico que toma la vista a partir de un valor asignado en función "data() {}".

- v-bind

  ```jsx
  <img v-bind:src="img" v-bind:alt="name"/
  ```

  \*Es una directiva para manipular el DOM de forma declarativa se usa en atributos de etiquetas HTML. Se puede abreviar con :src="img".

- v-if - v-else

  ```jsx
  <span v-if="changePercent > 0"> hola </span>

  <span v-else> adios </span>
  ```

  *v-if es una directiva que contiene una condición en el elemento donde se usa y este responde cuando la condición se cumple. En el ejemplo "changePercent" es un valor en "data".
  *v-else es una directiva que va junto con el "v-if" no necesita condición obligatoria. Haría lo contrario a "v-if" en el ejemplo. Cuando no cumple la condición no hay nodo.

- v-show

  ```jsx
  <span v-show="changePercent > 0"> hola </span>
  <span v-show="changePercent < 0"> adios </span>
  <span v-show="changePercent = 0"> nada </span>
  ```

  \*v-show es una directiva similar a "v-if" pero siempre tiene que definirse la condición. En el HTML no elimina el nodo sino solo manipula el atributo "display: none" para no mostrarse.

- v-for

  ```jsx
  <ul>
  	<li v-for="p in prices" v-bind:key="p">
  		{{p}}
  	</li>
  </ul>

  //
  <li v-for="(p,i) in prices" v-bind:key="p">
  		{{p}}
  </li>

  //
  <li v-for="(p,i) in pricesDays" v-bind:key="p.day">
  		{{i}} {{p.day}} {{p.value}}
  </li>
  ```

  *v-for es una directiva para renderizar listas. En el ejemplo "prices" equivale a un array y "p" es un valor que equivale a un elemento de prices que se recorrera. "p" puede ser un objeto. El uso de Key permite mantener el trackeo de los valores si estos se mueven o se modifican (es obligatorio el uso de key).
  *El elemento "i" segundo en el parentesis señala al indice que tiene cada valor representado por "p". "i" puede utilizarse dentro de una expresión. ejemplo: {{ i }}
  \*Si el array es de objetos el key puede ser especificado por un valor que no cambie. En el ejemplo "pricesDays" es un array con objetos y atributo (day y value).

- v-on

  ```jsx
  <span v-on:click="toggleprices">switch</span>
  <p v-show="prices">precios</p>

  ////////////

  data(){
  	prices:false
  }

  methods:{
  	toggleprices(){
  		this.prices = !this.prices;
  	}
  }
  ```

  \*v-on es una directiva para manejar eventos. Cualquier evento funciona despues de poner v-on. En el ejemplo el valor booleano de "prices" (establecido en data) cambia por el método "toggleprices" (establecido en methods - propiedad de la instancia vue). El cambio se realiza cuando se activa en este caso el evento click desde la vista).

- Clases en tiempo real

  ```jsx
  <h1
    class="uppercase"
    v-bind:class="changePorcentage > 0 ? blue:red"
    v-bind:class="{blue:p.value==price,red:p.value<0}"
  >
    precio
  </h1>
  ```

  \*El uso de "Clases en tiempo real" permite con la directiva "v-bind" establecer la clase de estilo que se usará deacuerdo a una condición. También puede establecerse varios cambios en un objeto. Ademas pueden mezclarse con clases declaradas directamente (como en el ejemplo). Donde se define la clase que contiene el color de texto. Estas también podrán ser activadas a través de eventos junto con "v-on".

- Estilos en tiempo real

  ```jsx
  <div v-bind:style="{background= color}"></div>
  ```

  \*"Estilos en tiempo real", asi como las clases, se pueden establecer estilos directamente con valores dinámicos a través de variables establecidas en "data". En el ejemplo "color" es una propiedad que se establece en data pero que podría cambiar a través de una lógica establecida en un "method".

- Computed properties - propiedades computada

  ```jsx
  <div>{{title}}</div>

  /////////

  computed:{
  	title(){
  		return `${this.name}+${this.symbol}`
  	}
  }
  ```

  \*Propiedades Computadas son propiedades que se establecen como función dentro de la propiedad "computed" de la instancia de VUE y se utiliza para cambiar dinámicamente más de una propiedad establecida en data. En el ejemplo "title" es la propiedad computada y se le llama en la vista como si fuera una propiedad (como una expresión) y no como una función.

- Watchers -Observadores

  ```jsx
  data(){
  showPrices: false
  },
  watch:{
  	showPrices(newVal, oldVal){
  		...logica
  	}
  }
  ```

  \*Los "Watchers" son funciones que no retornan nada sino que ejecutan código. Son establecidas en la propiedad "watch" de la instancia VUE. El nombre de la función debe coincidir con el nombre de la propiedad en data a observar. En la vista podría usar un evento que cambie el valor y el watcher ejecutaría el código de manera automática. Ejemplos (registrar algo en consola, enviar una notificación al usuario, hacer una llamada al cambio de una url).

- v-model - two way data binding

  ```jsx
  <input type="number" v-model="value">
  <span> {{value}} </span>

  ////////////////

  data(){
  	value: 0
  }
  ```

  \*v-model es una directiva que permite el uso de "two way data binding". En el ejemplo el input actualiza el valor de value en "data". Este valor se actualiza y lo muestra nuevamente en el span donde se le llama como propiedad.

- Comunicación entre componentes - Padres a hijos

  ```jsx
  //componente hijo
  props:['coin']

  //componente padre
  data(){
  	moneda:0
  }

  //Ejecución de componente HTML
  <nombre-componente-hijo v-bind:coin="moneda">
  </nombre-componente.hijo>
  ```

  \*para la comunicación de padres a hijos se usa "props" en el hijo para definir atributo que se pasara por el padre (usualmente App) y que puede ser directo en la etiqueta o algún valor definido en "data" del componente padre. En el ejemplo "coin" es el atributo y "moneda" es valor pasado en el componente padre (el uso de v-bind permite que sea dinámico).

- Comunicación entre componentes - Hijos a padres

  ```jsx
  //componente hijo
  methods:{
  	changeColor(){
  		this.$emit('Change-color','blue')
  	}
  }

  //componente padre
  methods:{
  	updateColor(color){
  		this.color = color || this color
  	}
  }

  //Ejecución de componente HTML
  <nombre-componente-padre v-on:change-color="updateColor">
  </nombre-componente-padre>
  ```

  \*para la comunicación de hijos a padres se hará a través de eventos(siempre). En el hijo se usa la función de VUE "$emit" que tiene como primer parametro el nombre de evento que se usa con "v-on" y como segundo parametro (opcional) un valor directo. En el ejemplo "updateColor" es un valor método implementado en "methods" que define el color que toma en función de su valor "color" definido en "data" del componente padre .

- Slots - ingresar contenido htm

  ```jsx
  //componente hijo
  <slot name="text"></slot>

  <slot name="link"></slot>

  //componente padre
  <componente>
  	<template v-slot:text> contenido html </template>
  	<template v-slot:link> contenido html </template>
  </componente>
  ```

  \*"slots" sirven para pasar contenido html del padre al hijo (se puede hacer por propiedades pero con slots es más comodo). En el ejemplo se usa la etiqueta slot en el hijo y se agrega la propiedad "name" si hay más de uno. En el componente padre se usa desde la etiqueta "template" con la directiva "v-slot" que permite enlazar el name del slot hijo. Dentro de template podrá ir cualquier contenido html.

- Hooks - ciclo de vida del componente

  ```jsx
  created(){
  	lógica
  }

  mounted(){
  	lógica
  }

  updated(){
  	lógica
  }

  destroyed(){
  	lógica
  }
  ```

  \*Según el "ciclo de vida del componente" existen estos métodos y los "before\_\_" en cada uno que pueden ser llamadas en cualquier componente. cuando se crea un componente primero se crea el padre. Cuando se monta primero se monta el hijo.

- Single File Components -SFC

  \*Es una forma que VUE nos da para trabajar con la lógica, estilo y template(HTML) en un mismo componente. Esto no es soportado por el navegador pero el CLI da un tooling para crear un archivo que si entiende el navegador.

- vue-router - El inicio para que la página sea un Single Page Application

  ```jsx
  //En el archivo router.js
  import Vue from "vue";
  import Router from "vue-router";

  import Home from "@/views/Home";
  import About from "@/views/About";
  import Error from "@/views/Error";

  Vue.use(Router);

  export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        component: About,
      },
  		{
        path: "/coin/:id",
        name: "coin-detail",
        component: CoinDetail,
      },
      {
        path: "*",
        name: "error",
        component: Error,
      },
    ],
  });

  //En el archivo main.js
  import router from "@/router"

  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");

  //En HTML del componente donde se quiera usar
  <router-view />
  //o
  <router-link to="/">Volver a la página de Inicio</router-link>
  <router-link :to="{ name: 'coin-detail', params: { id: a.id } }">
    {{ a.name }}
  </router-link>
  ```

  \*vue-router se instala en VUE2 como "npm i -S vue-router. El archivo router.js se crea aparte y se invoca la estructura basica que recibe todos los paths (usualmente de la carpeta views)

  \*En el archivo main.js se importa el archivo router.js y se invoca como una propiedad dentro de la instancia de VUE .

  - "router-view" permite que según el router, cambie solo la parte de HTML especificado según el path y el componente indicado.
    \*"router-link" reemplazo la etiqueta HTML <a> con su propiedad "to" para especificar la ruta a la que se dirige sin recargar toda la pagina.
    También se puede usar la propiedad "v-bind:to" o ":to" usando un objeto. En el ejemplo en la ultima linea se se especifica dentro del objeto el name(especificado en el router) en lugar de la url y tambien los parámetros que forman parte de la url(especificado en el router) como el id. Esto facilita hacer un link dinámico y que si cambia la url no se afectará ya que el name es el mismo.

- API - uso de fetch y aplicación en la vista

  ```jsx
  //En el archivo api.js
  const url = "https://api.coincap.io/v2";

  function getAssets() {
    //peticion GET con parametro limit que forma parte de la API
    return fetch(`${url}/assets?limit=20`)
      .then((res) => res.json())
      .then((res) => res.data);
  }

  export default { getAssets };
  ```

  Las peticiones http con json son hechas con fetch ([API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) de Http) siendo la de get la que se usa en el ejemplo

  ```jsx
  //En el componente padre
  import api from "@/api";
  data() {
      return {
        assets: [],
      };
    },
    created() {
      api.getAssets().then((assets) => (this.assets = assets));
    },
  //-----------------------
  <template>
    <div>
      <px-assets-table :assets="assets" />
    </div>
  </template>

  //En el componente hijo
  props: {
      assets: {
        type: String,
        default: () => [],
      },
    },
  //-------------------------
  <tbody>
        <tr
          v-for="a in assets"
          :key="a.id"
        >
          <td>
            <img
              :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
              :alt="a.name"
            />
          </td>
          <td>#{{ a.rank }}</td>
          <td>{{ a.name }}</td>
          <td>{{ a.priceUsd | dolar }}</td>
          <td>{{ a.marketCapUsd | dolar }}</td>
          <td>
            {{ a.changePercent24Hr | percent }}
          </td>
          <td class="hidden sm:block"></td>
        </tr>
      </tbody>

  ```

  La petición es invocada en el hook "created" del componente padre y esta es asignada a "assets" en "data" para ser usada en el HTML del padre para pasar la información al componente hijo a traves del "prop" con el nombre "assets en el componente hijo. Haciendo esto la data traida con la peticion GET esta disponible en el componente hijo y es usada en el HTML del componente usada a traves de un "v-for" para cargar el resultado y poblar la tabla.

- Filters - modificación de vista sin cambiar el valor

  ```jsx
  //En archivo filters.js
  import numeral from "numeral";

  const dollarFilter = function (value) {
    if (!value) {
      return "$ 0";
    }

    return numeral(value).format("($ 0.00a)");
  };

  //En el archivo main.js
  import { dollarFilter } from "@/filters";

  Vue.filter("dolar", dollarFilter);

  //En el HTML del componente hijo

  <td>{{ a.marketCapUsd | dolar }}</td>
  ```

  \*Los filters pueden ser creados en un archivo aparte en donde se crea la función para dar formato a un valor brindado (en este caso se importo la librería "numeral" para facilitar el formato.

  \*El archivo y la función especifica son importadas al archivo main.js para uso global a través de la función de VUE "filter" donde se le da el nombre y se asigna la función que le dará formato.

  - En el HTML donde se quiera usar el filter se usa un pipe "|" seguido del nombre que se le dio al filter en main.

- Rutas dinámicas - mostrar información bajo un mismo componente que ofrece un formato definido a través un valor dinámico en la URL

  ```jsx
  //En archivo api.js
  const url = "https://api.coincap.io/v2";

  function getAssets() {
    return fetch(`${url}/assets?limit=20`)
      .then((res) => res.json())
      .then((res) => res.data);
  }
  function getAsset(coin) {
    return fetch(`${url}/assets/${coin}`)
      .then((res) => res.json())
      .then((res) => res.data);
  }
  function getAssetHistory(coin) {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate() - 1);
    const start = now.getTime();

    return fetch(
      `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
    )
      .then((res) => res.json())
      .then((res) => res.data);
  }

  export default { getAssets, getAsset, getAssetHistory };

  //En archivo router.js
  {
        path: "/coin/:id",
        name: "coin-detail",
        component: CoinDetail,
  },

  //En el componente (CoinDetail.vue)
  <template>
    <div class="flex-col">
      <template v-if="asset.id">
        <div class="flex flex-col sm:flex-row justify-around items-center">
          <div class="flex flex-col items-center">
            <img
              :src="`https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`"
              :alt="asset.name"
              class="w-20 h-20 mr-5"
            />
            <h1 class="text-5xl">
              {{ asset.name }}
              <small class="sm:mr-2 text-gray-500">{{ asset.symbol }}</small>
            </h1>
          </div>

          <div class="my-10 flex flex-col">
            <ul>
              <li class="flex justify-between">
                <b class="text-gray-600 mr-10 uppercase">Ranking</b>
                <span>#{{ asset.rank }}</span>
              </li>
              <li class="flex justify-between">
                <b class="text-gray-600 mr-10 uppercase">Precio actual</b>
                <span>{{ asset.priceUsd | dolar }}</span>
              </li>
              <li class="flex justify-between">
                <b class="text-gray-600 mr-10 uppercase">Precio más bajo</b>
                <span>{{ min | dolar }}</span>
              </li>
              <li class="flex justify-between">
                <b class="text-gray-600 mr-10 uppercase">Precio más alto</b>
                <span>{{ max | dolar }}</span>
              </li>
              <li class="flex justify-between">
                <b class="text-gray-600 mr-10 uppercase">Precio Promedio</b>
                <span>{{ avg | dolar }}</span>
              </li>
              <li class="flex justify-between">
                <b class="text-gray-600 mr-10 uppercase">Variación 24hs</b>
                <span>{{ asset.changePercent24Hr | percent }}</span>
              </li>
            </ul>
          </div>

          <div class="my-10 sm:mt-0 flex flex-col justify-center text-center">
            <button
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Cambiar
            </button>

            <div class="flex flex-row my-5">
              <label class="w-full" for="convertValue">
                <input
                  id="convertValue"
                  type="number"
                  class="text-center bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                />
              </label>
            </div>

            <span class="text-xl"></span>
          </div>
        </div>
      </template>
    </div>
  </template>

  <script>
  import api from "@/api";

  export default {
    name: "CoinDetail",

    data() {
      return {
        asset: {},
        history: [],
      };
    },

    computed: {
      min() {
        return Math.min(
          ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
        );
      },

      max() {
        return Math.max(
          ...this.history.map((h) => parseFloat(h.priceUsd).toFixed(2))
        );
      },

      avg() {
        return (
          this.history.reduce((a, b) => a + parseFloat(b.priceUsd), 0) /
          this.history.length
        );
      },
    },

    created() {
      this.getCoin();
    },

    methods: {
      getCoin() {
        const id = this.$route.params.id;

        Promise.all([api.getAsset(id), api.getAssetHistory(id)]).then(
          ([asset, history]) => {
            this.asset = asset;
            this.history = history;
          }
        );
      },
    },
  };
  </script>

  <style scoped>
  td {
    padding: 10px;
    text-align: center;
  }
  </style>
  ```

  \*Se define la llamada API en el archivo "api.js" . Luego teniendo el HTML del componente deseado se ejecuta la(s) llamada(s) a la API para tener la información disponible en el componente (poblando el objeto asset en "data"). Con la información cargada se empieza a llenar la información en el HTML. En el ejemplo se usa asset como alias para el objeto json cargado desde el API e invocar la data que se desea en cada etiqueta HTML.

  \*En el ejemplo, para mostrar la información de mínimo, máximo y promedio, se hace una segunda definición en el archivo api.js para traer el histórico de precios en el componente (poblando el array "history" en "data") y a través de los métodos computados hacer el calculo haciendo uso de la información traída desde el API. Posteriormente, estos valores (métodos computados son llamados en el HTML del componente de forma declarativa (ejem: {{ avg }}).

- $route - representa a la ruta o toda la información disponible dentro de la ruta

  ```jsx
  //En el componente
  const id = this.$route.params.id;

  //en el archivo routes.js
  {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail,
  },
  ```

  *Es una propiedad que se agrega a cada componente cuando se trabaja con "vue-router" dentro de la instancia permite acceder a un valor dentro de la url que se encuentra en el router. En resumen permite acceder a la url, a los paramatros y a otras funcionalidades como el query stream.
  *En el ejemplo se quiere acceder al parametro id de una ruta que la contiene en el archivo routes.js "/coin/:id" (se identifica al parametro por ":")

- $router - Navegación programática - dentro de una función del componente podemos decirle al router que queremos cambiar de ruta

  ```jsx
  //En el componente Pxbutton
  <template>
    <button
      @click="buttonClick"
      class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-2 border border-green-500 hover:border-transparent rounded"
    >
      <slot></slot>
    </button>
  </template>

  <script>
  export default {
    name: "PxButton",
    methods: {
      buttonClick() {
        this.$emit("custom-click");
      },
    },
  };
  </script>

  //en el componente padre

  import PxButton from "./PxButton";
  components: {
      PxButton,
  },
  methods: {
      gotoCoin(id) {
        this.$router.push({ name: "coin-detail", params: { id } });
      },
  },

  //en el HTML del componente padre
  <td class="hidden sm:block">
      <PxButton @custom-click="gotoCoin(a.id)">
        <span> Detalle </span>
      </PxButton>
  </td>
  ```

  *En el ejemplo se crea un componente que contiene al botón "PxButton" y genera un $emit ("custom-click") para comunicarse con el componente padre. En el componente padre se importa "PxButton" y se crea la función en "methods" (gotoCoin) que gracias a la función $router indica al router a que ruta dirigir (se usa un objeto con el name y parametros que figuran en router en este caso "coin-detail").  
   *El método gotoCoin(id) sera usado en el HTML del componente padre en donde el id que se le indique "a.id" (en este caso esta dentro de un for) redirige de forma dinámica.

- $set - Problemas de reactividad que se pueden presentar

  ```jsx
  //En el api del componente
  //Listas de mercados para una moneda en particular
  function getMarkets(coin) {
    return fetch(`${url}/assets/${coin}/markets?limit=5`)
      .then((res) => res.json())
      .then((res) => res.data);
  }
  // se utilizara junto con markets ya que proporcionara el id que permita traer un exchange especifico
  function getExchange(id) {
    return fetch(`${url}/exchanges/${id}`)
      .then((res) => res.json())
      .then((res) => res.data);
  }

  export default {
    getAssets,
    getAsset,
    getAssetHistory,
    getMarkets,
    getExchange,
  };

  //En el script del componente
  data() {
      return {
        isLoading: false,
        asset: {},
        history: [],
        markets: [],
      };
    },
  methods: {
      getWebsite(exchange) {
        return api
          .getExchange(exchange.exchangeId)
          .then((res) => {
          this.$set(exchange, "url", res.exchangeUrl);
      },
      getCoin() {
        const id = this.$route.params.id;
        this.isLoading = true;

        Promise.all([
          api.getAsset(id),
          api.getAssetHistory(id),
          api.getMarkets(id),
        ])
          .then(([asset, history, markets]) => {
            this.asset = asset;
            this.history = history;
            this.markets = markets;
          })
          .finally(() => (this.isLoading = false));
      },
    },

  //En el HTML del componente

  <h3 class="text-xl my-10">Mejores Ofertas de Cambio</h3>
        <table>
          <tr
            v-for="m in markets"
            :key="`${m.exchangeId}-${m.priceUsd}`"
            class="border-b"
          >
            <td>
              <b>{{ m.exchangeId }}</b>
            </td>
            <td>{{ m.priceUsd | dollar }}</td>
            <td>{{ m.baseSymbol }} / {{ m.quoteSymbol }}</td>
            <td>
              <px-button
                :is-loading="m.isLoading || false"
                v-if="!m.url"
                @custom-click="getWebSite(m)"
              >
                <slot>Obtener Link</slot>
              </px-button>

              <a v-else class="hover:underline text-green-600" target="_blanck">{{
                m.url
              }}</a>
            </td>
          </tr>
        </table>

  ```

  *Se da porque Vue tiene un problema de reactividad al no reconocer alguna propiedad que se agrega o cambia una vez que un objeto ya se ha creado.
  *Este problema puede suceder solo en objetos o en Arrays para cosas que no existen desde el principio (No fue especificada en data o no estaba incluido cuando se creo el objeto y sus dependencias).
  *El que no este reconocida por Vue (trackeada) impide que la vista pueda reaccionar a cambios como una condicional que pide que se muestre algo siempre que la propiedad(que no se reconoció) exista. El problema se da en que el cambio no se efectúa a pesar de que la condición se cumple.
  *La solución es usar $set cuyo primero parámetro incluye el objeto afectado, el segundo parámetro es un String con el nombre de la propiedad y el tercer parámetro es el valor de esa propiedad.
    *En el ejemplo se trabaja con dos llamadas al API "getMarkets" y "getExchange". El primero se usa para poblar la tabla en el HTML del componente(Esto creo previamente un array "markets:[]" definido en data y llenado con la respuesta de la API). El segundo usa  la propiedad "exchangeId" como parámetro que se trajo del objeto, ya creado, dentro de array "markets:[]" para poder hacer una nueva llamada con getExchange y conseguir la propiedad "exchangeUrl". Esta propiedad fue ingresada en el  el objeto dentro del array "markets:[]". En este punto la propiedad "exchangeUrl" ya existe en el objeto pero no es reconocida por Vue. la solucion es "$set" para asignar el valor de la propiedad "exchangeUrl" a objeto dentro de "markets:[]" (de esta forma ya se reconoce y se puede interactuar con la vista).
