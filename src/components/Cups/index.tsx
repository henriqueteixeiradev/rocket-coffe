import React from 'react'
import Image from 'next/image'

import * as S from './styled'

export function Cups() {
  return (
    <S.Content>
      <S.CoffeLeftWrapper>
        <Image
          src="/img/c2.png"
          alt="Imagem de grãos de café do lado direito"
          width={342}
          height={424}
          quality={100}
        />
      </S.CoffeLeftWrapper>

      <S.CupsWrapper>
        <Image
          src="/img/cups.png"
          alt="Imagem de dois copos de café"
          width={1423}
          height={898}
          quality={100}
        />
      </S.CupsWrapper>

      <S.CoffeRightWrapper>
        <Image
          src="/img/c1.png"
          alt="Imagem de grãos de café do lado direito"
          width={402}
          height={426}
          quality={100}
        />
      </S.CoffeRightWrapper>
    </S.Content>
  )
}
