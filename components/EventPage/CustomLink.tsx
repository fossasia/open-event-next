import { FC, HTMLAttributeAnchorTarget, ReactNode } from 'react'
import { DefaultTheme, useTheme } from '@mui/styles'

interface LinkPropType {
  children?: ReactNode
  href: string
  target?: HTMLAttributeAnchorTarget | undefined
}

interface ThemeType extends DefaultTheme {
  palette: {
    primary: {
      main: string
    }
    common: {
      white: string
    }
  }
}

export const CustomLink: FC<LinkPropType> = (props) => {
  const theme: ThemeType = useTheme()

  return (
    <a
      href={props.href}
      target={props.target}
      style={{
        padding: '0.5rem 1.1rem',
        background: theme.palette.primary.main,
        textDecoration: 'none',
        color: theme.palette.common.white,
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {props.children}
    </a>
  )
}
