import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
   
    <svg viewBox="0 0 205 48"
      height="48px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m14 8c7.7319865 0 14 6.2680135 14 14s-6.2680135 14-14 14-14-6.2680135-14-14 6.2680135-14 14-14zm0 3c-6.07513225 0-11 4.9248678-11 11s4.92486775 11 11 11c6.0751322 0 11-4.9248678 11-11s-4.9248678-11-11-11z" fill="#84858D" opacity=".3" fill-rule="nonzero"/>
      <path d="m14.9731683 0 .0862376 48s-3.1413663-10.2266087-15.0594059-39.81886957c7.02617822-4.26808695 14.9731683-8.18113043 14.9731683-8.18113043zm2.4030693 4.95652174 8.6237624 6.33286956-8.5807723 30.1888696z" fill="#0f9" />
      <path d="m39.354 28.18c1.926 0 3.132-.72 4.266-1.89l-1.566-1.854c-.846.846-1.584 1.314-2.592 1.314-1.674 0-2.97-1.53-2.97-4.032v-.054c0-2.448 1.242-4.014 2.934-4.014 1.026 0 1.818.486 2.574 1.26l1.566-2.016c-.972-.99-2.178-1.674-4.05-1.674-3.33 0-5.706 2.592-5.706 6.408v.162c0 3.852 2.232 6.39 5.544 6.39zm9.158-.18v-5.13h4.14v5.13h2.61v-12.6h-2.61v5.058h-4.14v-5.058h-2.61v12.6zm12.38 0v-4.14h1.638l2.322 4.14h2.988l-2.682-4.68c1.386-.612 2.34-1.818 2.34-3.726v-.072c0-1.242-.378-2.232-1.062-2.916-.792-.792-1.962-1.206-3.42-1.206h-4.734v12.6zm1.926-6.444h-1.926v-3.798h1.872c1.332 0 2.106.63 2.106 1.89v.018c0 1.134-.72 1.89-2.052 1.89zm9.95 6.444v-12.6h-2.61v12.6zm6.854.162c2.448 0 4.23-1.44 4.23-3.78v-.036c0-1.962-1.188-2.898-3.384-3.762-1.962-.81-2.394-1.152-2.394-1.872v-.018c0-.648.558-1.098 1.458-1.098.972 0 1.89.522 2.682 1.17l1.458-1.98c-1.152-1.044-2.592-1.548-4.068-1.548-2.43 0-4.122 1.494-4.122 3.69v.036c0 2.16 1.386 3.006 3.618 3.87 1.8.684 2.16 1.08 2.16 1.71v.018c0 .738-.612 1.242-1.62 1.242-1.26 0-2.286-.684-3.132-1.422l-1.548 1.926c1.386 1.296 3.06 1.854 4.662 1.854zm11.39-.162v-10.188h3.168v-2.412h-8.928v2.412h3.168v10.188zm10.184.216c3.33 0 5.706-2.664 5.706-6.426v-.216c0-3.762-2.34-6.39-5.688-6.39-3.33 0-5.706 2.646-5.706 6.426v.216c0 3.762 2.34 6.39 5.688 6.39zm.018-2.412c-1.746 0-3.024-1.566-3.024-4.05v-.126c0-2.484 1.242-4.032 3.006-4.032 1.746 0 3.006 1.566 3.006 4.05v.126c0 2.484-1.242 4.032-2.988 4.032zm10.868 2.196v-3.834h1.476c2.646-.054 4.716-1.512 4.716-4.41v-.036c0-2.682-1.782-4.32-4.608-4.32h-4.194v12.6zm1.458-6.174h-1.458v-4.068h1.422c1.386 0 2.142.72 2.142 2.034v.018c0 1.17-.756 2.016-2.106 2.016zm9.554 6.174v-5.13h4.14v5.13h2.61v-12.6h-2.61v5.058h-4.14v-5.058h-2.61v12.6zm17.96 0v-2.358h-5.598v-2.808h4.86v-2.358h-4.86v-2.718h5.526v-2.358h-8.118v12.6zm5.162 0v-4.14h1.638l2.322 4.14h2.988l-2.682-4.68c1.386-.612 2.34-1.818 2.34-3.726v-.072c0-1.242-.378-2.232-1.062-2.916-.792-.792-1.962-1.206-3.42-1.206h-4.734v12.6zm1.926-6.444h-1.926v-3.798h1.872c1.332 0 2.106.63 2.106 1.89v.018c0 1.134-.72 1.89-2.052 1.89zm13.456 6.444.918-2.736h4.338l.936 2.736h2.7l-4.518-12.672h-2.484l-4.518 12.672zm4.464-5.04h-2.754l1.386-4.104zm14.198 5.04v-2.394h-5.094v-10.206h-2.61v12.6zm3.902 0 .918-2.736h4.338l.936 2.736h2.7l-4.518-12.672h-2.484l-4.518 12.672zm4.464-5.04h-2.754l1.386-4.104zm9.05 5.04v-7.614l4.986 7.614h2.232v-12.6h-2.556v7.344l-4.824-7.344h-2.394v12.6z" fill={fill} fill-rule="nonzero"/>
    </svg>
   
  );
}