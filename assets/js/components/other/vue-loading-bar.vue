<style>
	.loading-bar{
		transition:all 0.3s ease;
		-moz-transition:all 0.3s ease;
		-webkit-transition:all 0.3s ease;
		-o-transition:all 0.3s ease;
	}
	.loading-bar{
		position: fixed;
		top: 0;
		background: #036FFF;
		height: 3px;
		opacity: 1;
    z-index: 100;
	}
	.glow-bar{
		top: 0;
		position: absolute;
		width: 100px;
		height: 100%;
		box-shadow: -3px 0 15px 1px rgba(0, 20, 255, 0.4)
	}

	.to-right.loading-bar{
		left: 0;
	}
	.to-right .glow-bar{
		right: 0;
	}

	.to-left.loading-bar{
		right: 0;
	}
	.to-left .glow-bar{
		left: 0;
	}

	.full.loading-bar{
		transition:all 0.1s ease;
		-moz-transition:all 0.1s ease;
		-webkit-transition:all 0.1s ease;
		-o-transition:all 0.1s ease;
		height: 0;
		opacity: 0;
	}

	.error.loading-bar{
		background: #F44336;
	}
	.error .glow-bar{
		box-shadow: -3px 0 15px 1px rgba(244, 67, 54, 0.4);
	}
</style>

<template>
	<div 	v-if="show"
				class="loading-bar to-{{ direction }} {{ full }} {{ class != undefined ? class : '' }} {{ error ? 'error' : '' }}"
				:id="id != undefined ? 'loading-bar-'+id : ''"
				:style="styling()">

			<div class="glow-bar"></div>

	</div>
</template>

<script>
	/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
	* Licensed Under MIT (http://opensource.org/licenses/MIT)
	*
	* Vue Loding Bar - Version 0.0.1
	*
	*/

	export default {
		props: {
			id: String,
			class: String,

			progress: Number, // The progress of loading bar

			// the direction of loading bar
			direction: {
				type: String,
				default: "right"
			},

			error: Boolean // Loading Bar error state
		},

		data() {
			return {
				// To show
				show: true,

				// binding class when it end
				full: '',

				// state to animate the width of loading bar
				width: 0,

				// indicate the loading bar is in 100% ( so, wait it till gone )
				wait: false
			};
		},

		watch:{

			progress(val,old){

				if(old == 0 && val > 0){
					// Callback Event when it's started
					this.$dispatch('loading-bar:started');
				}

				if(val > 1 && val < 100){
					// Callback Event when it's loading
					this.$dispatch('loading-bar:loading');
				}

				// When the progress end
				if(this.progress == 100){

					// Prevent new progress change
					this.wait = true;

					// Start animate it
					this.width = 100;

					setTimeout(() => {
						// animate when element removed
						this.full = 'full';
						this.error = false;

							setTimeout(() => {
								//remove bar element
								this.show = false;

								// New Element is available to create now
								this.progress = 0;
								this.wait = false;

								setTimeout(() => {
									// Show Bar
									this.full = '';
									this.show = true;

									// Callback Event when it's loaded and totally gone
									this.$dispatch('loading-bar:loaded');
								});

						// Duration to Waiting for slick hiding animation
						},250);

					// Duration is depend on css animation-duration of loading-bar
					},700);

				// When the progress doesn't end yet
				}else{

					// Do normaly loading bar animation
					this.full = '';
					this.width = val;

				}

			},

			error(val,old){
				this.progress = 100;
				// Callback Event when it's error
				this.$dispatch('loading-bar:error');
			}

		},

		methods: {
			styling(){
				// When loading bar still in progress
				if(!this.wait){
					return { width: `${this.width}%` };

				// When loading bar end
				}else{
					// Make it stuck at 100 to waiting the animation
					return{ width: `100%` };
				}

			}

		}

	}
</script>
