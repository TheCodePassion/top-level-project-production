import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}></div>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>
        Головна
      </AppLink>
      <AppLink theme={AppLinkTheme.RED} to={'/about'}>
        Про нас
      </AppLink>
    </div>
  )
}
