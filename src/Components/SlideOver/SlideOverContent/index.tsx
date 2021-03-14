import React, { useState } from 'react'
import {
  Icon,
  getClassName,
  Avatar,
  createNotificationClassName,
} from '../../..'
import {
  sortEntityAlphabetically,
  capitalizeWord,
} from '../../../util/formattingFuncs'

export type SlideOverContentProps = {
  currentEntity: any
  data: any[]
}

export const SlideOverContent: React.FC<SlideOverContentProps> = ({
  currentEntity,
  data,
}: SlideOverContentProps) => {
  const [loadingEntities, setLoadingEntities] = useState<string[]>([])
  const { users } = currentEntity.getRelatedEntities(currentEntity)
  const ListEntity = ({
    list,
    data,
    entityType,
    isAddable,
    isRemovable,
  }: {
    list: any[]
    data: any[]
    entityType: string
    isAddable: boolean
    isRemovable: boolean
  }) => {
    const [searchValue, setSearchValue] = useState('')

    const removeEntity = (entityId: string) => {
      // back end calls
      if (!loadingEntities.includes(entityId))
        setLoadingEntities((previousLoadingEntities) => [
          ...previousLoadingEntities,
          entityId,
        ])
    }

    const addEntity = ({ id }: any) => {
      // back end calls
      if (!loadingEntities.includes(id))
        setLoadingEntities((previousLoadingEntities) => [
          ...previousLoadingEntities,
          id,
        ])
    }

    const getNotificationColor = (entityActive: boolean, blocked: boolean) => {
      const active: boolean =
        (entityType === 'clients' && entityActive) ||
        (entityType === 'users' && !blocked)
      return active ? 'green' : 'red'
    }

    const createActiveStatusIndicator = (
      entityActive: boolean,
      blocked: boolean
    ) => {
      return (
        <span
          className={getClassName(
            createNotificationClassName(
              getNotificationColor(entityActive, blocked),
              'md'
            )
          )}
        />
      )
    }

    const searchOptions = data
      .filter(({ id, name }) => {
        return (
          name.toLowerCase().includes(searchValue.toLowerCase()) &&
          !list.some(({ id: currentEntityId }: any) => currentEntityId === id)
        )
      })
      .map((entity) => {
        const { name, active: entityActive, blocked } = entity
        const activeStatusIndicator = createActiveStatusIndicator(
          entityActive,
          blocked
        )
        return {
          content: (
            <span className='flex'>
              {(entityType === 'users' || entityType === 'clients') && (
                <div className='flex pr-2'>
                  <div className='flex my-auto'>{activeStatusIndicator}</div>
                </div>
              )}
              <div className='break-all'>{name}</div>
            </span>
          ),
          onClick: () => addEntity(entity),
        }
      })

    return (
      <>
        <div className='flex justify-between py-2 mb-2 border-b border-gray-200'>
          <span className='text-xl font-medium'>
            {capitalizeWord(entityType)}
          </span>
          {isAddable && (
            <Icon
              iconName='plus'
              isButton
              className='flex items-center justify-center w-8 h-8 text-gray-200 bg-indigo-500 rounded-full hover:text-white'
            />
          )}
        </div>
        <ul>
          {list.length < 1 ? (
            <li className='mx-4 text-sm italic text-gray-400'>No results</li>
          ) : (
            list
              .sort(sortEntityAlphabetically)
              .map((entity: any, i: number) => {
                const {
                  id,
                  name,
                  emailAddress,
                  picture,
                  blocked,
                  active: entityActive,
                } = entity

                const isLoading = loadingEntities.includes(id)

                const activeStatusIndicator = createActiveStatusIndicator(
                  entityActive,
                  blocked
                )

                return (
                  <li
                    key={id}
                    className={getClassName([
                      'flex',
                      'justify-between',
                      'py-2',
                      'mx-4',
                      'text-xs',
                      [i > 0, ['border-t', 'border-gray-200']],
                    ])}
                  >
                    <span className='flex'>
                      {(entityType === 'users' || entityType === 'clients') && (
                        <div className='flex pr-2'>
                          <div className='flex my-auto'>
                            {entityType === 'users' ? (
                              <Avatar
                                notification={{
                                  placement: 'top',
                                  color: getNotificationColor(
                                    entityActive,
                                    blocked
                                  ),
                                }}
                                size={'sm'}
                                src={picture}
                                alt={name}
                              />
                            ) : (
                              activeStatusIndicator
                            )}
                          </div>
                        </div>
                      )}
                      <div>
                        <div className='truncate'>{name}</div>
                        {entityType === 'users' && (
                          <div className='truncate'>{emailAddress}</div>
                        )}
                      </div>
                    </span>
                    {isRemovable && (
                      <Icon
                        className={getClassName([
                          'w-5',
                          'h-5',
                          [
                            isLoading,
                            ['animate-spin', 'text-gray-300', 'my-auto'],
                            ['hover:text-gray-500', 'text-gray-400'],
                          ],
                        ])}
                        iconName={isLoading ? 'loader' : 'times'}
                        isButton={!isLoading}
                        onClick={isLoading ? undefined : () => removeEntity(id)}
                      />
                    )}
                  </li>
                )
              })
          )}
        </ul>
      </>
    )
  }
  return (
    <ListEntity
      list={users}
      data={data}
      entityType={'users'}
      isAddable
      isRemovable
    />
  )
}
