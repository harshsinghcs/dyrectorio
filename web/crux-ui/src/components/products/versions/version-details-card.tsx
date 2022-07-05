import { DyoCard } from '@app/elements/dyo-card'
import { DyoHeading } from '@app/elements/dyo-heading'
import DyoTag from '@app/elements/dyo-tag'
import { Version } from '@app/models'
import { utcDateToLocale } from '@app/utils'
import clsx from 'clsx'
import useTranslation from 'next-translate/useTranslation'
import React from 'react'

interface VersionDetailsCardProps {
  className?: string
  version: Version
}

const VersionDetailsCard = (props: VersionDetailsCardProps) => {
  const { t } = useTranslation('versions')

  const { version } = props

  return (
    <DyoCard className={clsx(props.className ?? 'p-6', 'flex flex-col')}>
      <DyoHeading element="h2" className="text-xl font-bold text-bright">
        {version.name}
      </DyoHeading>

      <div className="flex flex-row">
        <p className="mt-1 text-light">{version.changelog}</p>

        <div className="flex flex-col flex-grow">
          <span className="self-end text-bright whitespace-nowrap ml-2 mb-2">{utcDateToLocale(version.updatedAt)}</span>

          <div className="flex flex-row ml-auto mt-auto">
            {!version.default ? null : (
              <DyoTag color="bg-error-red" textColor="text-error-red">
                {t('default').toUpperCase()}
              </DyoTag>
            )}
            <DyoTag className="ml-8">{t(version.type).toUpperCase()}</DyoTag>
          </div>
        </div>
      </div>
    </DyoCard>
  )
}

export default VersionDetailsCard