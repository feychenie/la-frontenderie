<script>
</script>

<svg width="400" height="400" viewBox="0 0 400 400">
	<defs>
		<linearGradient id="black" gradientTransform="rotate(90)">
			<stop offset="0" stop-color="#0000" />
			<stop offset="0.49" stop-color="#0000" />
			<stop offset="0.5" stop-color="#1f272f" />
			<stop offset="1" stop-color="#1f272f" />
		</linearGradient>
		<linearGradient id="purple" gradientTransform="rotate(90)">
			<stop offset="0" stop-color="#fc00ff" />
			<stop offset="1" stop-color="#00dbde" />
		</linearGradient>
		<linearGradient id="pink" gradientTransform="rotate(90)">
			<stop offset="0" stop-color="#c26fdd" />
			<stop offset="1" stop-color="#f0bd50" />
		</linearGradient>
		<linearGradient id="blue" gradientTransform="rotate(90)">
			<stop offset="0" stop-color="#4ff0ea" />
			<stop offset="1" stop-color="#683df0" />
		</linearGradient>

		<filter id="noise2" x="-100" y="-100" width="400" height="400">
			<feTurbulence type="fractalNoise" baseFrequency="5" numOctaves="3" stitchTiles="stitch" />
			<feDisplacementMap in="SourceGraphic" scale="800" xChannelSelector="R" yChannelSelector="G" />
		</filter>

		<filter id="noiseHeavy" x="-50" y="-50" width="300" height="300">
			<feTurbulence
				id="freq"
				type="fractalNoise"
				baseFrequency="0.7"
				numOctaves="0.1"
				stitchTiles="stitch"
			/>
			<feDisplacementMap in="SourceGraphic" scale="170" xChannelSelector="G" yChannelSelector="G" />
		</filter>
		<mask id="maskedHeavyNoise">
			<rect cx="0" cy="0" width="200" height="200" fill="white" filter="url(#noiseHeavy)" />
		</mask>

		<filter id="noise" x="-50" y="-50" width="300" height="300">
			<feTurbulence type="fractalNoise" baseFrequency="3" numOctaves="3" stitchTiles="stitch" />
			<feDisplacementMap in="SourceGraphic" scale="300" xChannelSelector="G" yChannelSelector="G" />
		</filter>
		<mask id="maskedNoise">
			<rect cx="0" cy="0" width="200" height="200" fill="white" filter="url(#noise)" />
		</mask>
	</defs>
	<g>
		<circle
			r="22.5"
			cx="166.81239"
			cy="52.30754"
			mask="url(#maskedHeavyNoise)"
			fill="url(#blue)"
			style="opacity: 1;"
		/>
	</g>
</svg>
