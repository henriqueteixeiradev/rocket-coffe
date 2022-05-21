import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styled'

interface CallToActionProps {
  title: string
}

export function CallToAction({ title }: CallToActionProps) {
  return (
    <S.Button>
      <h1>{title}</h1>
    </S.Button>
  )
}
