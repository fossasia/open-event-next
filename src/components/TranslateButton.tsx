import * as React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import LanguageIcon from '@mui/icons-material/Language'
import { activateAndSetCookie, supportedLocales } from '../../utils/i18n'

export default function TranslateButton() {
  const ITEM_HEIGHT = 48
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [language, setSelectedLanguage] = React.useState('English')
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    locale: string
  ) => {
    setSelectedIndex(index)
    setSelectedLanguage(supportedLocales[locale])
    activateAndSetCookie(locale)
    setAnchorEl(null)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        size="small"
        sx={{ bgcolor: '#767676' }}
        startIcon={<LanguageIcon />}
        disableElevation
      >
        {language}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '12ch',
          },
        }}
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
      >
        {Object.keys(supportedLocales).map((locale, index: number) => (
          <MenuItem
            key={locale}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, locale)}
          >
            {supportedLocales[locale]}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
