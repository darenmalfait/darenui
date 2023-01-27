import Link from 'next/link'
import {ButtonLink} from '@daren/ui-components'
import {motion} from 'framer-motion'

import {Footer} from './footer'
import {Header} from './header'
import {GithubLogo} from './icons/github-logo'
import {Logo} from './logo'
import {Navigation} from './navigation'
import {Prose} from './prose'
import {Seo} from './seo'

export function Layout({
  metaTitle: title,
  children,
  path,
  description,
  pkg,
  image,
}: {
  metaTitle?: string
  path?: string
  children: React.ReactNode
  description?: string
  pkg?: string
  image?: string
}) {
  return (
    <>
      <Seo
        image={image}
        url={path ?? '/'}
        title={`${title ?? pkg ?? ''} | DarenUI`}
        description={description ?? ''}
      />
      <div className="bg-primary lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto px-6 pt-4 pb-8 bg-primary shadow-outline lg:block xl:w-80"
        >
          <div className="hidden lg:flex">
            <Link href="/" aria-label="Home">
              <div className="flex items-center space-x-3">
                <Logo className="h-6" />
                <span className="ml-2 flex items-center space-x-2 text-lg font-semibold text-primary">
                  Daren
                  <span className="ml-1 rounded-md border border-black p-1 text-[8px] leading-snug dark:!border-white">
                    UI
                  </span>
                </span>
              </div>
            </Link>
          </div>
          <Header />
          <Navigation className="hidden lg:mt-10 lg:block" />
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="py-16">
            {pkg ? (
              <div className="mx-auto max-w-5xl">
                <ButtonLink
                  size="small"
                  variant="secondary"
                  href={`https://github.com/darenmalfait/darenui/tree/main/packages/${pkg}`}
                  className="mb-12 inline-flex space-x-2 text-gray-900 dark:text-white"
                  external
                >
                  <GithubLogo className="h-5 w-5" />
                  <span>View on Github</span>
                </ButtonLink>
              </div>
            ) : null}
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}
