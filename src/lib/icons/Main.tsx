import * as React from "react"

function SvgComponent(props) {
  return (
    <svg fill="none" viewBox="0 0 370 370" {...props}>
      <path
        fill="#000"
        d="M153.12 250.51l-1.6-11.35 9.76-2.09V152.6l-9.6-.97v-11.67h68.16l3.2 29.91h-9.76l-6.24-16.31h-29.92v34.23h25.12v13.28h-25.12v35.37l25.6 3.84-.96 10.23h-48.64z"
      />
      <g filter="url(#prefix__filter0_dd)">
        <path
          stroke="#000"
          strokeWidth={12}
          d="M55.4 150.94L191 52.42l135.6 98.52-51.8 159.41H107.2L55.4 150.94z"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_dd"
          width={302.32}
          height={288.35}
          x={41.34}
          y={38}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={-6} dy={-6} />
          <feGaussianBlur stdDeviation={0.5} />
          <feColorMatrix values="0 0 0 0 0.166406 0 0 0 0 0.454844 0 0 0 0 0.8875 0 0 0 0.5 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={6} dy={6} />
          <feGaussianBlur stdDeviation={2} />
          <feColorMatrix values="0 0 0 0 0.941667 0 0 0 0 0.137326 0 0 0 0 0.137326 0 0 0 0.5 0" />
          <feBlend in2="effect1_dropShadow" result="effect2_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgComponent
