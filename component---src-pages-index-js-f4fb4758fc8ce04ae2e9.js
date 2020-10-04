/*! For license information please see component---src-pages-index-js-f4fb4758fc8ce04ae2e9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7W2i":function(e,t,a){var l=a("SksO");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){var t,a,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var n=+new Date;!!t&&n<t+l?(clearTimeout(a),a=setTimeout((function(){t=n,e()}),l)):(t=n,e())}};t.default=l},H3pJ:function(e,t,a){},Ijbi:function(e,t,a){var l=a("WkPL");e.exports=function(e){if(Array.isArray(e))return l(e)}},Nsbk:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},RIqP:function(e,t,a){var l=a("Ijbi"),n=a("EbDI"),r=a("ZhPi"),o=a("Bnag");e.exports=function(e){return l(e)||n(e)||r(e)||o()}},RXBc:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("7oih");function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=a("dI71"),i=a("YIkO"),c=a.n(i),m=a("dwco"),u=a.n(m),d=function(e){return e.children},f=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(o(t)),t}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){u.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,l=this.props,n=l.type,r=l.element,o=l.offset,s=l.timeout;if(n&&r)switch(n){case"class":a=!!(t=document.getElementsByClassName(r)[0]);break;case"id":a=!!(t=document.getElementById(r))}a?this.scrollTo(t,o,s):console.log("Element not found: "+r)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var l=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:l+t,left:0,behavior:"smooth"})}),a):window.scroll({top:l+t,left:0,behavior:"smooth"})},a.render=function(){return n.a.createElement(d,null,"object"==typeof this.props.children?n.a.cloneElement(this.props.children,{onClick:this.handleClick}):n.a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(n.a.Component),p=a("TUGy"),v=a.n(p),h=a("obyI"),E=a.n(h),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Voluntary Work",href:"voluntarywork"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"}],isCollapsed:!0},a.toggleNavbar=a.toggleNavbar.bind(o(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.toggleNavbar=function(){this.setState({isCollapsed:!this.state.isCollapsed})},a.render=function(){var e=this.state,t=e.tabs,a=e.isCollapsed;return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},n.a.createElement("a",{className:"navbar-brand",href:"#page-top"},n.a.createElement("span",{className:"d-block d-lg-none"},E.a.firstName," ",E.a.lastName),n.a.createElement("span",{className:"d-none d-lg-block"},n.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:v.a,alt:""}))),n.a.createElement("button",{className:"navbar-toggler navbar-toggler-right "+(a?"collapsed":""),type:"button","data-toggle":"collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",onClick:this.toggleNavbar},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse "+(a?"":"show"),id:"navbarSupportedContent"},n.a.createElement(c.a,{items:t.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},t.map((function(e,t){var a=e.href,l=e.content;return n.a.createElement("li",{className:"nav-item",key:a},n.a.createElement(f,{type:"id",element:a},n.a.createElement("a",{className:"nav-link",href:"#"+a},l)))})))))},t}(l.Component);a("H3pJ"),a("ovLP"),t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(g,null),n.a.createElement("div",{className:"container-fluid p-0"},n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h1",{className:"mb-0"},E.a.firstName,n.a.createElement("span",{className:"text-primary"},E.a.lastName)),n.a.createElement("div",{className:"subheading mb-5"},n.a.createElement("a",{href:"mailto:"+E.a.email},E.a.email)),n.a.createElement("p",{className:"lead mb-5"},"A multi skilled professional with over 8 years experience in software/web development.",n.a.createElement("br",null),n.a.createElement("br",null)," A highly-motivated individual, who has worked on multi range of products in developing and maintaining software products in Agile environment. Demonstrates strong analytical thinking skill, with ability to communicate to different internal and external customers, and able to successfully satisfy the needs from stakeholders."),n.a.createElement("div",{className:"social-icons"},E.a.socialLinks.map((function(e){var t=e.icon,a=e.url;return n.a.createElement("a",{key:a,href:a,className:"social",target:"_blank",rel:"noreferrer"},n.a.createElement("i",{className:"fab "+t}))}))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Experience"),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Software Engineer"),n.a.createElement("div",{className:"subheading mb-3"},"Bidenergy"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Maintain and develop bill validation framework, budget, buyer report framework, bill tracking tool and framework, manual bill entry tool(cyborg) and framework, and accrual method using .NET"),n.a.createElement("li",null,"BAU support"),n.a.createElement("li",null,"Generate report to stakeholders in CSV or excel format"),n.a.createElement("li",null,"Involved in writing sql query for Power BI usage"),n.a.createElement("li",null,"Involved in setting up SFTP user login using AWS API Gateway and AWS Lambda"),n.a.createElement("li",null,"Involved in developing quote system using .net core, web api and reactjs"),n.a.createElement("li",null,"Involved in developing meter data connector for transferring file from AWS S3 to SFTP server"),n.a.createElement("li",null,"Involved in developing data warehouse site daily database table from actual bill-metadata usage and spend components"),n.a.createElement("li",null,"Involved in replicating contract framework for meter data contract")),n.a.createElement("span",null,"Tools: Html, Css, Javascript (AngularJs, VueJs, ReactJs, jQuery), C# Asp.Net Mvc, WebApi, Mysql, Sql Server, Mongodb, Wordpress, Nhibernate, Jenkins, GitHub, AWS, Jira, Trello, Hangfire",n.a.createElement("br",null)," Platform: Windows and Ubuntu"))),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"May 2016 - Present"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Web Developer"),n.a.createElement("div",{className:"subheading mb-3"},"Potentiality"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Maintain and Develop web pages using Jquery, CSS and HTML")),n.a.createElement("span",null,"Tools: Html, Css, Javascript, Jquery, C#, Wordpress"))),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"July 2015 - May 2016"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Junior .NET Programmer"),n.a.createElement("div",{className:"subheading mb-3"},"Axima"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Maintain and develop e-quote system using .NET")),n.a.createElement("span",null,"Tools: Html, Css, Javascript, Jquery, C# Asp.Net Mvc, Sql, Linq, Entity Framework"))),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"Feb 2013 - Feb 2015"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Graduate Software Developer"),n.a.createElement("div",{className:"subheading mb-3"},"Adslot"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Maintain and Develop car sales front end auction system using .NET")),n.a.createElement("span",null,"Tools: Html, Css, Javascript, Jquery, C# Asp.Net Mvc, Sql"))),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"July 2012 - Feb 2013"))),n.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},n.a.createElement("div",{className:"resume-content"},n.a.createElement("h3",{className:"mb-0"},"Student Intern"),n.a.createElement("div",{className:"subheading mb-3"},"Thales"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Metric KPI report delivery"),n.a.createElement("li",null,"GISEL project developed in Perl; synchronisation tool between GAIA and external party software")),n.a.createElement("span",null,"Tools: HTML, CSS, Javascript (jQuery), Perl, Linux Shell Scripting",n.a.createElement("br",null),"Platform: Windows and Linux"))),n.a.createElement("div",{className:"resume-date text-md-right"},n.a.createElement("span",{className:"text-primary"},"March 2009 - Feb 2011"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"voluntarywork"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Voluntary Work"),n.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row mb-5"},n.a.createElement("div",{class:"resume-content mr-auto"},n.a.createElement("div",{class:"typewriter"},n.a.createElement("h3",{class:"mb-0"},"Web Application Developer")),n.a.createElement("div",{class:"subheading mb-3"},"Self Employed"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Developed a website for advertising and selling columbarium.")))),n.a.createElement("div",{class:"resume-date text-md-right"},n.a.createElement("span",{class:"text-primary period-range"},"Jan 2019 - Jan 2020"))),n.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row mb-5"},n.a.createElement("div",{class:"resume-content mr-auto"},n.a.createElement("div",{class:"typewriter"},n.a.createElement("h3",{class:"mb-0"},"Web Developer")),n.a.createElement("div",{class:"subheading mb-3"},"Self Employed"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"To assist in improving and developing personal carer record system.")))),n.a.createElement("div",{class:"resume-date text-md-right"},n.a.createElement("span",{class:"text-primary period-range"},"Apr 2012 - Dec 2012"))),n.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row mb-5"},n.a.createElement("div",{class:"resume-content mr-auto"},n.a.createElement("div",{class:"typewriter"},n.a.createElement("h3",{class:"mb-0"},"Web Developer")),n.a.createElement("div",{class:"subheading mb-3"},"Freelance"),n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",null,"Website maintenance for a client.")))),n.a.createElement("div",{class:"resume-date text-md-right"},n.a.createElement("span",{class:"text-primary period-range"},"Apr 2012 - Dec 2017"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Education"),n.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row mb-5"},n.a.createElement("div",{class:"resume-content mr-auto"},n.a.createElement("div",{class:"typewriter"},n.a.createElement("h3",{class:"mb-0"},"RMIT University")),n.a.createElement("div",{class:"subheading mb-3"},"Bachelor of Software Engineering"),n.a.createElement("div",null),n.a.createElement("p",null)),n.a.createElement("div",{class:"resume-date text-md-right"},n.a.createElement("span",{class:"text-primary period-range"},"2007 - 2011"))),n.a.createElement("div",{class:"resume-item d-flex flex-column flex-md-row mb-5"},n.a.createElement("div",{class:"resume-content mr-auto"},n.a.createElement("div",{class:"typewriter"},n.a.createElement("h3",{class:"mb-0"},"Trinity College, University of Melbourne")),n.a.createElement("div",{class:"subheading mb-3"},"Foundation Studies"),n.a.createElement("p",null)),n.a.createElement("div",{class:"resume-date text-md-right"},n.a.createElement("span",{class:"text-primary period-range"},"2006 - 2006"))))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex flex-column",id:"skills"},n.a.createElement("div",{class:"my-auto"},n.a.createElement("h2",{class:"mb-5"},"Skills"),n.a.createElement("div",{class:"subheading mb-3"},"Programming Languages & Tools"),n.a.createElement("ul",null,n.a.createElement("li",null,"Requirement gathering, estimation and design"),n.a.createElement("li",null,"Unit Testing"),n.a.createElement("li",null,"Reporting"),n.a.createElement("li",null,"Automation"),n.a.createElement("li",null,"Prioritizing tasks"),n.a.createElement("li",null,"Proficient in C#, Asp.Net Framework, .Net Core, WebApi, Sql, Mysql, Mongo (Nosql), Typescript, ReactJs, AngularJs, Vuejs, Javascript, Html, Css"),n.a.createElement("li",null,"Web, digital, cloud platform"),n.a.createElement("li",null,"Windows and Linux environment"),n.a.createElement("li",null,"GitHub and BitBucket"),n.a.createElement("li",null,"Jira and Trello"),n.a.createElement("li",null,"IT support")),n.a.createElement("div",{class:"subheading mb-3"},"Workflow"),n.a.createElement("ul",{class:"fa-ul mb-0"},n.a.createElement("li",null,n.a.createElement("i",{class:"fa-li fa fa-check"})," Mobile-First, Responsive Design"),n.a.createElement("li",null,n.a.createElement("i",{class:"fa-li fa fa-check"})," Cross Browser Testing & Debugging"),n.a.createElement("li",null,n.a.createElement("i",{class:"fa-li fa fa-check"})," Cross Functional Teams"),n.a.createElement("li",null,n.a.createElement("i",{class:"fa-li fa fa-check"})," Agile Development & Scrum")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{id:"table_div"}))),n.a.createElement("hr",{className:"m-0"}),n.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},n.a.createElement("div",{className:"w-100"},n.a.createElement("h2",{className:"mb-5"},"Interests"),n.a.createElement("p",null,"Apart from being a sofware developer, I enjoy most of my time doing online courses to upskill and playing computer games for relaxation."),n.a.createElement("p",{class:"mb-0"},"I also enjoy going to the gym and spending time with my partner. Travelling and looking for great food are also part of my interests."))),n.a.createElement("hr",{className:"m-0"})))}},SksO:function(e,t){function a(t,l){return e.exports=a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(t,l)}e.exports=a},TSYQ:function(e,t,a){var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var l=arguments[t];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)&&l.length){var o=n.apply(null,l);o&&e.push(o)}else if("object"===r)for(var s in l)a.call(l,s)&&l[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()},TUGy:function(e,t,a){e.exports=a.p+"static/avatar-1fda620ca2c890998d188c289551f456.png"},W8MJ:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}e.exports=function(e,t,l){return t&&a(e.prototype,t),l&&a(e,l),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}},YIkO:function(e,t,a){"use strict";var l=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("pVnL")),r=l(a("lSNA")),o=l(a("RIqP")),s=l(a("lwsE")),i=l(a("a1gu")),c=l(a("Nsbk")),m=l(a("PJYZ")),u=l(a("W8MJ")),d=l(a("7W2i")),f=l(a("17x9")),p=l(a("q1tI")),v=l(a("TSYQ")),h=l(a("Fxm3"));var E=function(e){function t(e){var a;return(0,s.default)(this,t),(a=(0,i.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,d.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:f.default.arrayOf(f.default.string).isRequired,currentClassName:f.default.string.isRequired,scrolledPastClassName:f.default.string,style:f.default.object,componentTag:f.default.oneOfType([f.default.string,f.default.elementType]),offset:f.default.number,rootEl:f.default.string,onUpdate:f.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],l=0,n=e.length;l<n;l++)a[l]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],l=[],n=e||this.state.targetItems,r=!1,s=0,i=n.length;s<i;s++){var c=n[s],m=!r&&this._isInView(c);m?(r=!0,t.push(c)):a.push(c);var u=s===i-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&d&&(a.pop(),a.push.apply(a,(0,o.default)(t)),t=[c],l=this._fillArray(l,!1),m=!0),l.push(m)}return{inView:t,outView:a,viewStatusList:l,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(l)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,l=a.rootEl,n=a.offset;l&&(t=document.querySelector(l).getBoundingClientRect());var r=e.getBoundingClientRect(),o=l?t.height:window.innerHeight,s=this._getScrollDimension().scrollTop,i=s+o,c=l?r.top+s-t.top+n:r.top+s+n,m=c+e.offsetHeight;return c<i&&m>s}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,l=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=l}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),l=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(l)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,h.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,l=a.children,o=a.className,s=a.scrolledPastClassName,i=a.style,c=0,m=p.default.Children.map(l,(function(t,a){var l;if(!t)return null;var o=t.type,i=s&&e.state.isScrolledPast[a],m=(0,v.default)((l={},(0,r.default)(l,"".concat(t.props.className),t.props.className),(0,r.default)(l,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,r.default)(l,"".concat(e.props.scrolledPastClassName),i),l));return p.default.createElement(o,(0,n.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,v.default)((0,r.default)({},"".concat(o),o));return p.default.createElement(t,{className:u,style:i},m)}}]),t}(p.default.Component);t.default=E},ZhPi:function(e,t,a){var l=a("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return l(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?l(e,t):void 0}}},a1gu:function(e,t,a){var l=a("cDf5"),n=a("PJYZ");e.exports=function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?n(e):t}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,l=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:l.prototype.scroll||s,scrollIntoView:l.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(i(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==i(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==i(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==i(arguments[0])){var a=d(this),l=a.getBoundingClientRect(),r=this.getBoundingClientRect();a!==t.body?(p.call(this,a,a.scrollLeft+r.left-l.left,a.scrollTop+r.top-l.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function i(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function m(t,a){var l=e.getComputedStyle(t,null)["overflow"+a];return"auto"===l||"scroll"===l}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function d(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function f(t){var a,l,n,o,s=(r()-t.startTime)/468;o=s=s>1?1:s,a=.5*(1-Math.cos(Math.PI*o)),l=t.startX+(t.x-t.startX)*a,n=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,l,n),l===t.x&&n===t.y||e.requestAnimationFrame(f.bind(e,t))}function p(a,l,o){var i,c,m,u,d=r();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=n.scroll):(i=a,c=a.scrollLeft,m=a.scrollTop,u=s),f({scrollable:i,method:u,startTime:d,startX:c,startY:m,x:l,y:o})}}}}()},lSNA:function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},obyI:function(e,t){e.exports={siteTitle:"Gatsby Portfolio",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",pathPrefix:"",firstName:"Daniel",lastName:"Yap",socialLinks:[{icon:"fa-github",name:"Github",url:"https://github.com/daniel-yap-aeiou"},{icon:"fa-linkedin-in",name:"Linkedin",url:"https://linkedin.com/in/daniel-yap-aeiou/"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/danielyapppp"},{icon:"fa-facebook-f",name:"Facebook",url:"https://facebook.com/danielyappp"}],email:"danielytf@gmail.com",phone:"",address:""}},ovLP:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-f4fb4758fc8ce04ae2e9.js.map