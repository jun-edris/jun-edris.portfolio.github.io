import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

type Props = {};

const ParticleContainer = (props: Props) => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(
		async (container: Container | undefined) => {
			await console.log(container);
		},
		[]
	);

	return (
		<div className="relative mix-blend-overlay">
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
					particles: {
						number: {
							value: 50,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: '#ffffff',
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 0,
								color: '#000000',
							},
							polygon: {
								nb_sides: 5,
							},
							image: {
								src: 'img/github.svg',
								width: 100,
								height: 100,
							},
						},
						opacity: {
							value: 0.5,
							random: false,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync: false,
							},
						},
						size: {
							value: 10,
							random: true,
							anim: {
								enable: false,
								speed: 10,
								size_min: 10,
								sync: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 100,
							color: '#ffffff',
							opacity: 1,
							width: 1,
						},
						move: {
							enable: true,
							speed: 3,
							direction: 'none',
							random: false,
							straight: false,
							out_mode: 'bounce',
							bounce: false,
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200,
							},
						},
					},
					interactivity: {
						detect_on: 'canvas',
						events: {
							onhover: {
								enable: true,
								mode: 'grab',
								parallax: {
									enable: false,
									force: 60,
									smooth: 10,
								},
							},
							onclick: {
								enable: true,
								mode: 'push',
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 400,
								size: 1,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
					fps_limit: 60,
				}}
			/>
		</div>
	);
};

export default ParticleContainer;
