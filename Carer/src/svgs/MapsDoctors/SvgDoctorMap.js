import * as React from 'react';
import Svg, { Rect, Mask, G, Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Rect
        width={48}
        height={48}
        rx={24}
        transform="matrix(1 0 0 -1 0 48)"
        fill="#00C48C"
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={48}
        height={48}>
        <Rect
          width={48}
          height={48}
          rx={24}
          transform="matrix(1 0 0 -1 0 48)"
          fill="#fff"
        />
      </Mask>
      <G mask="url(#prefix__a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.647 12.24c-.068-.028-2.714-.722-2.554 1.954.16 2.675 2.813 1.963 2.814 1.886 0-.077-.26-3.84-.26-3.84z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.029 15.115c-.012-.008-.045.035-.122.076a.467.467 0 01-.348.028c-.288-.086-.553-.521-.595-1.002a1.54 1.54 0 01.09-.676c.07-.2.189-.345.33-.378a.238.238 0 01.282.11c.04.074.027.128.041.132.008.006.055-.048.027-.158a.297.297 0 00-.115-.161.353.353 0 00-.262-.053c-.206.027-.38.228-.462.444-.094.218-.141.482-.117.756.05.538.355 1.026.749 1.114a.5.5 0 00.422-.096c.079-.07.09-.132.08-.136z"
          fill="#AA6550"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.328 2.68c1.36 0 2.744 0 4.445.89 1.074.56 1.743 1.448 2.302 2.522.428.822.682 1.898.633 2.824-.05.925-.053 1.572-.422 2.422"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.785 2.89c4.023-.28 7.498 2.79 7.708 6.817.176 3.352.33 6.977.293 8.803-.08 3.918-4.004 4.496-4.004 4.496s.086 1.162.183 2.603a5.16 5.16 0 11-10.306.538l-.583-15.792a7.216 7.216 0 016.709-7.464z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.782 23.006s-2.408.125-5.027-1.55c0 0 1.185 2.852 5.098 2.53l-.071-.98z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.993 11.887a.56.56 0 01-.545.56.535.535 0 01-.572-.508.56.56 0 01.543-.561.536.536 0 01.574.51zM30.535 11.095c-.07.073-.491-.245-1.093-.248-.602-.011-1.046.295-1.111.22-.032-.032.04-.164.233-.302.191-.138.515-.271.89-.267.375.005.69.146.87.289.184.143.246.276.211.308zM24.087 11.887a.56.56 0 01-.544.56.536.536 0 01-.573-.508.56.56 0 01.544-.561.536.536 0 01.573.51zM24.615 11.16c-.07.073-.492-.244-1.093-.248-.602-.011-1.046.295-1.11.22-.032-.032.038-.163.233-.302.19-.138.514-.271.89-.266.374.005.689.145.869.288.184.143.246.276.211.308zM26.765 15.643c-.003-.034.372-.096.98-.168.153-.015.3-.044.326-.15.037-.11-.026-.276-.1-.456l-.444-1.174c-.619-1.672-1.065-3.047-.997-3.07.067-.025.623 1.31 1.241 2.982l.427 1.182c.056.175.155.374.075.604a.384.384 0 01-.255.223c-.099.029-.185.03-.261.034-.611.028-.99.028-.992-.007zM24.99 16.046c.098-.005.094.648.65 1.117.554.47 1.252.402 1.256.493.009.041-.156.126-.45.132a1.628 1.628 0 01-1.05-.375 1.417 1.417 0 01-.502-.937c-.023-.273.051-.434.096-.43zM24.79 8.802c-.06.163-.661.08-1.368.16-.71.065-1.28.268-1.373.12-.041-.07.059-.224.29-.38.23-.157.596-.304 1.02-.348.425-.043.812.027 1.07.134.257.107.387.236.361.314zM30.45 8.951c-.106.136-.52-.009-1.019-.02-.498-.028-.921.085-1.017-.059-.043-.07.025-.206.21-.334.184-.128.489-.23.831-.218.343.014.639.14.811.282.175.142.232.283.185.35z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.122 11.578s.17.906.216 1.315c.017.15-.003 1.81.4 1.893.347.071 1.037-.245 1.344-.931.306-.687.89-2.334.827-3.084-.085-1.022-.133-2.06.07-3.065.205-1.005.686-1.985 1.494-2.617.807-.632 1.972-.853 2.889-.394.565.284.989.787 1.516 1.137.474.315 1.053.504 1.616.42.563-.083 1.095-.475 1.249-1.023.168-.598-.14-1.253-.619-1.65-.478-.395-1.097-.577-1.706-.698-1.69-.336-3.481-.269-5.087.355-1.606.624-3.03 1.823-3.717 3.403-.794 1.827-.701 2.947-.492 4.94z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.08 11.913c-.016.001 0-.238-.103-.646a2.653 2.653 0 00-2.077-1.93 2.633 2.633 0 00-2.037.475 2.628 2.628 0 00-1.06 2.1 2.63 2.63 0 001.722 2.459c.461.176.946.19 1.376.117a2.653 2.653 0 002.077-1.93c.103-.408.086-.646.101-.645.002 0 .003.014.003.043 0 .035 0 .076-.002.127 0 .056-.002.125-.016.206-.01.082-.02.176-.05.279a2.651 2.651 0 01-.965 1.49c-.303.23-.688.429-1.133.51a2.707 2.707 0 01-2.683-1.053 2.718 2.718 0 01-.529-1.603 2.717 2.717 0 011.79-2.543c.478-.18.98-.19 1.422-.112.445.082.83.28 1.133.512a2.65 2.65 0 01.966 1.49c.029.102.039.196.05.277.013.081.016.15.015.207l.002.127a.145.145 0 01-.003.043zM32.976 11.913c-.015.001.002-.238-.102-.646a2.654 2.654 0 00-2.077-1.93 2.634 2.634 0 00-2.037.475 2.626 2.626 0 00-1.06 2.1 2.628 2.628 0 001.722 2.459 2.615 2.615 0 002.482-.37 2.653 2.653 0 00.97-1.443c.104-.408.087-.646.102-.645.002 0 .003.014.003.043l-.001.127c0 .056-.003.125-.017.206-.01.082-.02.176-.05.279a2.652 2.652 0 01-.965 1.49c-.303.23-.688.429-1.133.51a2.707 2.707 0 01-2.683-1.053 2.716 2.716 0 01-.528-1.603 2.715 2.715 0 011.79-2.543c.477-.18.978-.19 1.42-.112.446.082.83.28 1.134.512.612.474.873 1.08.966 1.49.029.102.039.196.05.277.013.081.016.15.016.207l.001.127a.142.142 0 01-.003.043z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.714 11.629c-.008.013-.096-.036-.246-.085a1.615 1.615 0 00-.604-.077 1.624 1.624 0 00-.588.156c-.141.07-.222.13-.232.117-.008-.008.058-.089.198-.178.14-.09.36-.176.616-.194.255-.016.485.04.635.11.152.07.227.142.221.15zM28.782 5.018c.039-.203-.028-.317.086-.4.131-.095.378.154.468.253.03.032.121-.092.157-.116.029-.019.073-.225.069-.26-.017-.141-.24-.18-.345-.276a1.056 1.056 0 00-.369-.21c-.117-.04-.262-.063-.354.021-.07.065-.08.17-.078.265a.74.74 0 00.053.276.389.389 0 00.189.203"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.976 9.496s1.921.704 2.921 1.128l-.056-.983-2.795-1.105s-.071.73-.07.96zM17.156 7.97c.01-.026.62.208 1.36.52.74.314 1.332.588 1.321.613-.01.025-.62-.208-1.36-.521-.74-.313-1.332-.588-1.321-.613z"
          fill="#EBEBEB"
        />
        <Path
          d="M17.735 28.667l-.148-4.65s.923 4.255 5.762 4.2c4.624-.053 4.539-3.75 4.539-3.75l.165 1.875v7.57l-3.016 12.35-3.851.49-4.257-16.883.806-1.202z"
          fill="#4B66EA"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.458 27.178a.48.48 0 01-.056.1c-.042.06-.093.16-.184.27a3.97 3.97 0 01-.86.833 4.96 4.96 0 01-1.61.755 5.684 5.684 0 01-2.17.15 7.077 7.077 0 01-2.085-.627 9.03 9.03 0 01-1.522-.918c-.407-.302-.716-.57-.923-.764-.104-.095-.18-.174-.233-.226a.48.48 0 01-.077-.085.508.508 0 01.09.07l.246.213c.213.183.528.443.938.736.409.292.917.612 1.52.891.6.281 1.3.51 2.059.612a5.691 5.691 0 002.134-.14 5.01 5.01 0 001.592-.724c.41-.289.697-.581.871-.8.177-.22.26-.351.27-.346z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.1 66.87l-.07-21.946-6.232-16.017-.21-4.82-3.797 2.871s-5.529 19.03-5.614 18.37c-.085-.66-.002 21.542-.002 21.542H24.1z"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.95 66.81c-.027 0-.049-4.946-.049-11.045 0-6.1.022-11.045.05-11.045.027 0 .049 4.944.049 11.045 0 6.1-.022 11.045-.05 11.045z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.847 30.093l.77.584-.541 3.55 9.097 9.53-8.263-10.85.704-2.814h-1.767z"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.441 55.628l-13.96-4.094-.463-10.604 3.829-13.971s-9.128 4.553-9.749 7.451c-.62 2.898-2.118 9.943-2.278 15.034-.143 4.552-.163 7.596.876 9.05 2.977 4.16 22.597 4.904 30.435-.007"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.349 43.987a.343.343 0 01-.046-.052l-.125-.156a970.45 970.45 0 01-.474-.608l-1.73-2.245-5.676-7.43-.427-.56-.014-.019.006-.023.705-2.812.046.059c-.61 0-1.2-.002-1.767-.003h-.045v-.045l.007-3.134v-.019l.015-.011 2.744-2.085.753-.566.198-.145a.484.484 0 01.07-.046.483.483 0 01-.063.055l-.192.154-.74.581-2.724 2.111.015-.03.007 3.135-.045-.045 1.767-.002h.061l-.014.059-.703 2.813-.008-.042a172053.523 172053.523 0 016.08 8.008l1.704 2.264.46.619.117.162a.366.366 0 01.038.058z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.573 26.133c-1.114-1.948-1.692-1.745-1.692-1.745l.058.694.002 1.459-.528 6.257-3.383 13.598.07 20.474h12.786l1.592-24.992-.145-10.767-8.76-4.978z"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.333 31.112s3.31 2.443 3.596 6.373c.233 3.193.767 11.934.864 13.837.15 2.964-2.157 9.904-8.166 7.938-3.603-1.179-16.915-5.704-16.915-5.704l.886-5.653 15.8.941.314-13.179 3.62-4.553z"
          fill="#EBEBEB"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.03 44.352a.312.312 0 01.02-.06l.067-.175.268-.669 1-2.45 1.496-3.63c.142-.34.283-.695.458-1.041.17-.35.368-.694.573-1.04.421-.688.898-1.374 1.42-2.05.258-.333.518-.657.787-.967l-.009.05-.557-1.417-.018-.047.047-.016 2.331-.792-.024.065a21451.27 21451.27 0 01-2.642-4.412c-.32-.535-.593-.963-.883-1.139a1.164 1.164 0 00-.353-.143c-.085-.02-.13-.028-.13-.031a1.1 1.1 0 01.498.15c.15.086.3.239.448.435.147.196.305.43.465.699l2.674 4.395.029.047-.053.018-2.328.8.029-.064.559 1.416.01.028-.019.023c-.266.307-.526.631-.783.962-.52.674-.996 1.356-1.415 2.04-.205.344-.403.685-.57 1.031-.176.343-.316.694-.46 1.035l-1.515 3.622-1.03 2.438-.284.661-.076.171a.287.287 0 01-.03.057zM11.331 38.012c-.006 0-.03-.103-.063-.288-.029-.09-.07-.198-.113-.324-.06-.12-.12-.261-.207-.406a5.724 5.724 0 00-.711-.946 7.598 7.598 0 00-1.09-.96c-.84-.604-1.724-.957-2.385-1.095-.332-.059-.604-.102-.793-.1-.19-.01-.295-.018-.296-.025 0-.006.105-.011.296-.014.192-.013.468.02.807.07.674.122 1.578.472 2.428 1.084.427.303.79.648 1.1.978.301.339.54.673.705.974.085.15.14.296.197.42.04.13.076.242.099.335.024.192.033.297.026.297zM37.837 54.227a.348.348 0 01-.004-.067l-.004-.199c-.006-.174-.013-.431-.038-.76a10.582 10.582 0 00-.561-2.734 3.888 3.888 0 00-.383-.835 1.638 1.638 0 00-.74-.627c-.636-.274-1.4-.238-2.178-.282l-5.091-.214c-4.207-.183-7.95-.34-10.3-.466l.03-.026-.332 2.024-.092.537-.026.137a.207.207 0 01-.012.047l.003-.048.018-.138.077-.54.305-2.029.004-.026.028.001 10.301.429 5.091.221c.392.02.773.029 1.145.06.371.032.736.093 1.062.238.327.14.596.381.77.66.179.278.289.574.386.854.389 1.127.49 2.094.533 2.753a11.34 11.34 0 01.014.963.313.313 0 01-.006.067z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.824 41.857c.028 0 .05 1.53.05 3.418 0 1.888-.022 3.418-.05 3.418-.027 0-.05-1.53-.05-3.418 0-1.887.023-3.418.05-3.418zM4.208 34.068s-.012.043-.039.126c-.025.084-.074.204-.114.37-.092.328-.209.82-.34 1.458-.264 1.278-.59 3.148-.954 5.49-.181 1.17-.374 2.458-.564 3.85a31.02 31.02 0 00-.207 2.172c-.05.75-.09 1.525-.118 2.323a80.275 80.275 0 00-.046 5.034c.013.438.03.881.066 1.327.011.223.048.443.076.666.046.22.087.441.161.655.137.43.343.843.629 1.201.284.355.655.662 1.078.83l.006.003.002.001c.875.452 1.834.78 2.812 1.074.98.294 1.994.53 3.022.743 2.302.47 4.586.746 6.79.826a31.624 31.624 0 003.242-.084 39.538 39.538 0 003.082-.331 32.465 32.465 0 005.53-1.286 28.35 28.35 0 004.473-1.919l.005.061-6.135-2.171-1.652-.59-.428-.155c-.096-.036-.144-.056-.144-.056s.05.014.148.047l.43.146 1.658.573 6.145 2.143.073.025-.068.036a28.231 28.231 0 01-4.479 1.936 32.444 32.444 0 01-5.543 1.3c-.998.149-2.03.26-3.088.334a31.56 31.56 0 01-3.251.088c-2.212-.08-4.5-.355-6.807-.827a35.293 35.293 0 01-3.03-.745c-.983-.295-1.944-.624-2.83-1.082l.007.003c-.455-.182-.828-.496-1.123-.863a3.825 3.825 0 01-.644-1.232c-.076-.218-.117-.445-.164-.668-.028-.226-.065-.451-.076-.675a25.898 25.898 0 01-.065-1.332 79.56 79.56 0 01.053-5.04c.03-.798.072-1.574.123-2.325a30.81 30.81 0 01.212-2.175c.194-1.393.391-2.681.577-3.852.373-2.34.708-4.209.983-5.486.136-.638.258-1.129.356-1.456.043-.165.095-.286.123-.368.03-.082.047-.123.047-.123z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.497 50.266c2.335-2.585 2.232-7.18.892-10.442-.123 3.533-.54 6.666-.86 10.099"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.394 40.485c.004 0 .003.04 0 .114l-.022.322-.093 1.185-.322 3.91-.306 3.91-.09 1.185-.027.322a.47.47 0 01-.017.112.5.5 0 01-.003-.113l.01-.323c.009-.28.029-.687.057-1.188.058-1.002.153-2.386.278-3.914.124-1.527.251-2.908.35-3.907l.125-1.182.04-.321a.461.461 0 01.02-.112zM17.15 35.815c.027 0 .05.897.05 2.004s-.023 2.005-.05 2.005c-.028 0-.05-.898-.05-2.005 0-1.107.022-2.004.05-2.004z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.629 42.474c.034.41.21.778.43 1.063.219.285.665.564 1.024.544 0 0 .896.076 1.378-.692.437-.696.545-2.143.195-2.998-.241-.588-.783-1.135-1.418-1.15-.835-.02-1.358.583-1.536 1.193"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.702 40.434s.019-.159.154-.409c.068-.124.167-.27.313-.41a1.456 1.456 0 01.988-.41c.139-.008.29.009.434.056.29.094.56.295.775.556.216.26.376.59.455.948.081.358.106.739.085 1.124-.039.594-.155 1.185-.484 1.637a1.466 1.466 0 01-.63.475c-.237.095-.48.13-.713.12h.006a1.073 1.073 0 01-.51-.126 1.687 1.687 0 01-.385-.269 1.913 1.913 0 01-.419-.623 1.841 1.841 0 01-.144-.586c0-.028 0-.043.002-.043.014-.003.014.238.185.61.088.18.213.405.42.594.105.094.23.181.373.25.142.067.305.122.474.113h.005c.428.015.947-.15 1.26-.572.307-.423.425-1.004.461-1.585.04-.75-.085-1.506-.512-2.01a1.633 1.633 0 00-.73-.535 1.124 1.124 0 00-.406-.058 1.428 1.428 0 00-.952.374c-.145.132-.246.27-.317.39-.144.238-.177.393-.188.39z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.185 42.512c.034.409.21.778.43 1.063.219.285.664.564 1.024.543 0 0 .896.077 1.378-.691.437-.696.545-2.143.195-2.998-.241-.589-.783-1.136-1.418-1.15-.835-.02-1.358.582-1.536 1.193"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.258 40.472s.019-.16.154-.41a1.68 1.68 0 01.313-.41 1.457 1.457 0 01.987-.41c.14-.007.29.01.435.057.29.094.56.294.775.556.216.26.376.59.455.948.081.358.106.738.085 1.124-.039.594-.156 1.185-.484 1.637a1.465 1.465 0 01-.63.475 1.71 1.71 0 01-.713.12h.006a1.072 1.072 0 01-.511-.127 1.68 1.68 0 01-.384-.268 1.909 1.909 0 01-.419-.623 1.834 1.834 0 01-.144-.586c0-.029 0-.043.002-.043.014-.004.013.238.184.61.089.18.213.404.421.594.105.094.23.18.373.25.142.066.305.121.474.112h.005c.428.015.947-.15 1.26-.57.307-.424.425-1.005.461-1.586.04-.75-.085-1.507-.512-2.01a1.635 1.635 0 00-.73-.535 1.127 1.127 0 00-.406-.059 1.418 1.418 0 00-.952.375c-.145.132-.246.27-.318.389-.143.239-.176.394-.187.39z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.99 40.258c-.415-.082-.844.203-1.019.587-.175.385-.137.839.002 1.238.071.203.168.401.316.558.148.156.35.269.566.275.316.01.6-.206.783-.463.296-.414.397-.962.267-1.455-.086-.329-.328-.666-.668-.675"
          fill="#E0E0E0"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.237 40.323c0-.003.026-.006.075-.002.05.005.123.022.206.07.167.092.357.32.434.653.08.326.071.75-.117 1.16-.095.203-.23.405-.425.559-.19.154-.467.253-.732.175a1.02 1.02 0 01-.585-.478 2.138 2.138 0 01-.243-.655c-.092-.437-.018-.87.19-1.146.202-.279.476-.396.66-.42a.733.733 0 01.217-.001c.049.01.073.017.072.02 0 .012-.103-.019-.282.018a1.008 1.008 0 00-.611.423c-.185.263-.25.67-.157 1.087.046.209.118.427.237.624a.93.93 0 00.528.433c.23.067.47-.016.646-.157.181-.14.31-.329.403-.52.183-.387.2-.792.13-1.107-.064-.317-.235-.54-.385-.636-.152-.098-.264-.088-.26-.1z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.946 43.376c-.015.004-.036-.06-.1-.136a.708.708 0 00-.325-.207c-.147-.046-.292-.053-.398-.062-.106-.008-.173-.016-.173-.03 0-.013.065-.03.173-.04.107-.009.262-.013.428.038a.63.63 0 01.351.26c.06.101.055.176.044.177zM17.095 40c.009.009-.03.068-.117.138a.927.927 0 01-.4.174.924.924 0 01-.436-.023c-.107-.035-.163-.077-.158-.088.01-.028.262.075.576.014.315-.053.516-.237.535-.215zM30.128 26.414c.002-.003.023.005.063.023s.097.045.169.087c.143.081.345.211.568.406a4.08 4.08 0 011.22 1.932c.263.86.404 1.665.466 2.249.032.292.05.529.061.693.01.164.012.255.005.255s-.022-.089-.043-.251l-.093-.688a14.48 14.48 0 00-.49-2.23 4.201 4.201 0 00-1.173-1.908c-.429-.395-.764-.55-.753-.568zM27.766 47.292c.55-.02.989-.569 1.538-.54.408.022.755.421.72.828-.034.407-.444.742-.849.695-.577-.067-.915-.743-1.481-.874"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.427 47.76c-.164 0-.336-.014-.514-.042l.03-.188c.68.11 1.25-.002 1.696-.33.561-.413.923-1.151 1.075-2.194l.006-.04c.062-.413.148-8.526.148-10.066 0-2.406-2.111-2.734-2.201-2.747-.086-.016-2.005-.336-3.024 2.291-1.066 2.752-2.771 8.055-2.884 8.676a7.98 7.98 0 01-.059.28c-.177.796-.546 2.452.558 3.405 1.231 1.063 2.202.652 2.243.634l.078.173c-.046.02-1.117.483-2.445-.663-1.19-1.028-.804-2.759-.62-3.59.025-.107.045-.199.059-.273.113-.626 1.824-5.951 2.894-8.71 1.077-2.78 3.21-2.415 3.23-2.41.02.002 2.361.36 2.36 2.934 0 1.269-.083 9.655-.15 10.094l-.005.04c-.16 1.094-.547 1.875-1.15 2.318-.37.272-.814.408-1.325.408z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.963 36.452c-.025.008-.055-.405-.395-.946a3.206 3.206 0 00-1.967-1.387 3.565 3.565 0 00-2.402.313c-.566.295-.819.617-.834.598-.003-.002.012-.022.043-.058.032-.035.074-.092.142-.152.127-.127.334-.291.617-.45a3.44 3.44 0 011.068-.376c.421-.077.904-.084 1.388.029.485.111.913.336 1.251.6.338.266.588.568.754.847.164.28.253.53.292.706.026.086.03.157.039.204.006.046.008.071.004.072z"
          fill="#263238"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M30.226 48.45s1.865-2.826 2.341-3.196c.477-.37 4.548-2.208 5.025-1.912.477.295.183.936.183.936s1.724-.603 1.907-.365c.183.238.22.641 0 .971 0 0 .954-.147.954.147 0 .293-.11.66-.55.99-.44.33-3.302 2.235-3.532 2.761l-.927-.056-5.401-.276z"
          fill="#FFBE9D"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.593 47.641c-.005-.003.023-.067.085-.178.063-.11.164-.264.307-.441.283-.356.757-.784 1.353-1.14a10.2 10.2 0 011.6-.751c.211-.08.383-.141.503-.181.12-.04.187-.06.19-.053.002.006-.06.038-.176.089l-.491.21c-.414.177-.988.42-1.575.772-.588.35-1.059.76-1.35 1.099-.296.337-.43.584-.446.574zM33.227 47.596c-.005-.004.027-.077.091-.208.064-.13.159-.319.287-.546.13-.226.291-.494.514-.761.115-.133.23-.269.39-.387a13.63 13.63 0 012.315-1.216 5.32 5.32 0 01.587-.196c.143-.032.222-.047.223-.04.004.017-.309.09-.783.3a17.342 17.342 0 00-2.286 1.232c-.142.102-.266.24-.377.365a5.746 5.746 0 00-.523.739l-.313.528c-.074.125-.119.193-.124.19z"
          fill="#AA6550"
        />
      </G>
    </Svg>
  );
}

const SvgDoctorMap = React.memo(SvgComponent);
export default SvgDoctorMap;
