<template lang="jade">
	div(
		:class="allClasses"
		:id='id')
		slot
</template>


<script>

  import assign from '../../../../node_modules/babelify/node_modules/lodash/object/assign.js';
  global.assign = assign

	export default {

		props: {
			'xs':{},
			'xsOffset':{},
			'sm':{},
			'smOffset':{},
			'md':{},
			'mdOffset':{},
			'lg':{},
			'lgOffset':{},
			'id':{},
			'classes':{
				default: ""
			},
			'bindClass':{}
			},

		data(){
			return{
				allClasses: "",
				bindedClasses: ""
			};
		},

		computed: {
			allClasses(){
				return `${this.classes} ${this.bindedClasses} ${this.colClasses}`
			},

			bindedClasses(){
				let clean = assign({},this.bindClass,{});

				let binded = clean;
				let keys = Object.keys(clean);

				let hasBinded = [];
				for (let i in keys) {
					let classes = keys[i];
					if(binded[classes]) hasBinded.push(classes);
				}

				return hasBinded.join(" ");
			},

			colClasses(){
				let xs = this.xs ? " col-xs-"+this.xs : "";
				let sm = this.sm ? " col-sm-"+this.sm : "";
				let md = this.md ? " col-md-"+this.md : "";
				let lg = this.lg ? " col-lg-"+this.lg : "";
				let xsOffset = this.xsOffset ? " col-xs-offset-"+this.xsOffset : "";
				let smOffset = this.smOffset ? " col-sm-offset-"+this.smOffset : "";
				let mdOffset = this.mdOffset ? " col-md-offset-"+this.mdOffset : "";
				let lgOffset = this.lgOffset ? " col-lg-offset-"+this.lgOffset : "";
				return xs+sm+md+lg+xsOffset+smOffset+mdOffset+lgOffset;
			}
		}

	};
</script>
