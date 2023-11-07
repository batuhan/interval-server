export default function Logo({
  className,
  iconFillColor,
}: {
  className?: string
  iconFillColor?: string
}) {
  return (
    <svg
      viewBox="0 0 199 34"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={iconFillColor}
        d="M0.000183105 11.1812C0.000183105 11.2889 0.00580062 11.3952 0.0167584 11.4999V23.2874C0.0167584 23.3373 0.0181169 23.3869 0.020799 23.4361C0.102598 25.0346 1.42456 26.3055 3.04335 26.3055H11.4505V20.2523H5.39732V14.2078H11.4339V8.15466H3.02675C1.35522 8.15466 0.000183105 9.5097 0.000183105 11.1812Z"
      />
      <path
        fill={iconFillColor}
        d="M28.9373 11.4999C28.9483 11.3952 28.9539 11.2889 28.9539 11.1812C28.9539 9.5097 27.5989 8.15466 25.9274 8.15466H17.5202V14.2078H23.5568V20.2523H17.5036V26.3055H25.9108C27.5294 26.3055 28.8513 25.0348 28.9333 23.4365C28.936 23.3872 28.9373 23.3374 28.9373 23.2874V11.4999Z"
      />
      <path d="M44 0.68V33.32H50.1653V0.68H44Z" />
      <path d="M72.1927 19.6293C72.2532 20.4907 72.2834 21.2009 72.2834 21.76V33.32H78.5394V19.584C78.5394 19.176 78.5092 18.5262 78.4487 17.6347C78.3883 16.7431 78.2145 15.7609 77.9274 14.688C77.6403 13.6 77.1567 12.5573 76.4767 11.56C75.8118 10.5627 74.875 9.73911 73.6661 9.08933C72.4572 8.43956 70.8932 8.11467 68.9741 8.11467C66.5714 8.11467 64.5767 8.636 62.9901 9.67867C62.2541 10.1669 61.6044 10.7264 61.0407 11.3572V8.84H55.5554V33.32H61.8114V20.8987C61.8114 19.3724 61.9776 18.1484 62.3101 17.2267C62.6576 16.3049 63.0958 15.6098 63.6247 15.1413C64.1536 14.6578 64.7203 14.3329 65.3247 14.1667C65.9292 14.0004 66.4958 13.9173 67.0247 13.9173C68.3394 13.9173 69.3518 14.212 70.0621 14.8013C70.7874 15.3907 71.3087 16.1236 71.6261 17C71.9434 17.8764 72.1323 18.7529 72.1927 19.6293Z" />
      <path d="M97.749 33.32C96.0566 33.6373 94.3944 33.7733 92.7624 33.728C91.1455 33.6978 89.6948 33.4182 88.4104 32.8893C87.141 32.3453 86.1739 31.4764 85.509 30.2827C84.9046 29.1644 84.5873 28.0311 84.557 26.8827C84.5268 25.7191 84.5117 24.4044 84.5117 22.9387V13.6H80.341V8.84H84.5117V2.04H90.677V8.84H97.749V13.6H90.677V22.576C90.677 23.528 90.6846 24.3893 90.6997 25.16C90.7299 25.9156 90.8886 26.52 91.1757 26.9733C91.7197 27.8347 92.5886 28.3031 93.7824 28.3787C94.9762 28.4542 96.2984 28.3938 97.749 28.1973V33.32Z" />
      <path d="M105.253 32.3907C107.173 33.4636 109.386 34 111.895 34C114.252 34 116.421 33.3804 118.4 32.1413C120.395 30.9022 121.853 29.1644 122.775 26.928L116.609 25.16C116.156 26.1573 115.499 26.9204 114.637 27.4493C113.776 27.9782 112.741 28.2427 111.532 28.2427C109.613 28.2427 108.155 27.6231 107.157 26.384C106.438 25.4657 105.982 24.2719 105.79 22.8027H122.979C123.236 19.8409 122.933 17.2644 122.072 15.0733C121.211 12.8822 119.881 11.1822 118.083 9.97333C116.285 8.76445 114.101 8.16 111.532 8.16C109.114 8.16 106.976 8.71156 105.117 9.81467C103.259 10.9027 101.801 12.4364 100.743 14.416C99.685 16.3956 99.1561 18.7227 99.1561 21.3973C99.1561 23.8453 99.6926 26.0213 100.765 27.9253C101.853 29.8142 103.349 31.3027 105.253 32.3907ZM116.741 18.224H105.952C106.192 17.0933 106.594 16.164 107.157 15.436C108.155 14.1516 109.704 13.5093 111.804 13.5093C113.602 13.5093 114.894 14.0609 115.68 15.164C116.207 15.8798 116.561 16.8998 116.741 18.224Z" />
      <path d="M133.333 18.292C133.076 19.0324 132.948 19.8711 132.948 20.808V33.32H126.737V8.84H132.177V12.7793C132.38 12.4164 132.607 12.0704 132.857 11.7413C133.386 11.0462 134.036 10.472 134.806 10.0187C135.396 9.656 136.038 9.37644 136.733 9.18C137.428 8.96845 138.146 8.84 138.886 8.79467C139.627 8.73422 140.367 8.74933 141.108 8.84V14.5973C140.428 14.3858 139.634 14.3178 138.728 14.3933C137.836 14.4538 137.028 14.6578 136.302 15.0053C135.577 15.3378 134.965 15.7836 134.466 16.3427C133.968 16.8867 133.59 17.5364 133.333 18.292Z" />
      <path d="M141.793 8.84L150.678 33.32H156.843L165.729 8.84H159.563L153.761 25.7947L147.958 8.84H141.793Z" />
      <path d="M173.892 34C172.14 34 170.651 33.6676 169.427 33.0027C168.218 32.3227 167.296 31.4236 166.662 30.3053C166.042 29.172 165.732 27.9253 165.732 26.5653C165.732 25.432 165.906 24.3969 166.254 23.46C166.601 22.5231 167.16 21.6996 167.931 20.9893C168.717 20.264 169.767 19.6596 171.082 19.176C171.988 18.8436 173.069 18.5489 174.323 18.292C175.577 18.0351 176.998 17.7933 178.584 17.5667C179.518 17.4244 180.507 17.2742 181.551 17.1162C181.434 16.1069 181.102 15.3353 180.556 14.8013C179.861 14.1213 178.698 13.7813 177.066 13.7813C176.159 13.7813 175.215 14.0004 174.232 14.4387C173.25 14.8769 172.563 15.6551 172.17 16.7733L166.594 15.0053C167.213 12.9804 168.377 11.3333 170.084 10.064C171.792 8.79467 174.119 8.16 177.066 8.16C179.227 8.16 181.146 8.49245 182.823 9.15733C184.5 9.82222 185.77 10.9707 186.631 12.6027C187.115 13.5093 187.402 14.416 187.492 15.3227C187.583 16.2293 187.628 17.2418 187.628 18.36V33.32H182.234V30.315C181.26 31.4625 180.225 32.3282 179.128 32.912C177.753 33.6373 176.008 34 173.892 34ZM175.207 29.1493C176.34 29.1493 177.292 28.9529 178.063 28.56C178.849 28.152 179.468 27.6911 179.922 27.1773C180.39 26.6636 180.708 26.2329 180.874 25.8853C181.191 25.2204 181.372 24.4498 181.418 23.5733C181.455 23.0301 181.48 22.543 181.495 22.112C180.479 22.2854 179.607 22.4401 178.879 22.576C177.746 22.7724 176.832 22.9538 176.136 23.12C175.441 23.2862 174.829 23.4676 174.3 23.664C173.696 23.9058 173.205 24.1702 172.827 24.4573C172.464 24.7293 172.192 25.0316 172.011 25.364C171.845 25.6964 171.762 26.0667 171.762 26.4747C171.762 27.0338 171.898 27.5173 172.17 27.9253C172.457 28.3182 172.857 28.6204 173.371 28.832C173.885 29.0436 174.497 29.1493 175.207 29.1493Z" />
      <path d="M192.615 0V33.32H198.781V0H192.615Z" />
    </svg>
  )
}
