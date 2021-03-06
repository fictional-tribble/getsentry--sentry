import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
// import {action} from '@storybook/addon-actions';

import AutoComplete from 'app/components/autoComplete';

const items = [
  {
    name: 'Apple',
  },
  {
    name: 'Pineapple',
  },
  {
    name: 'Orange',
  },
];

storiesOf('AutoComplete', module).add(
  'default',
  withInfo('Description')(() => (
    <AutoComplete itemToString={item => item.name}>
      {({
        getRootProps,
        getInputProps,
        getMenuProps,
        getItemProps,
        inputValue,
        selectedItem,
        highlightedIndex,
        isOpen,
      }) => {
        return (
          <div {...getRootProps({style: {position: 'relative'}})}>
            <input {...getInputProps({})} />

            {isOpen && (
              <div
                {...getMenuProps({
                  style: {
                    boxShadow:
                      '0 1px 4px 1px rgba(47,40,55,0.08), 0 4px 16px 0 rgba(47,40,55,0.12)',
                    position: 'absolute',
                    backgroundColor: 'white',
                    padding: '0',
                  },
                })}
              >
                <div>
                  {items
                    .filter(
                      item =>
                        item.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
                    )
                    .map((item, index) => (
                      <div
                        key={item.name}
                        {...getItemProps({
                          item,
                          index,
                          style: {
                            cursor: 'pointer',
                            padding: '6px 12px',
                            backgroundColor:
                              index === highlightedIndex
                                ? 'rgba(0, 0, 0, 0.02)'
                                : undefined,
                          },
                        })}
                      >
                        {item.name}
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        );
      }}
    </AutoComplete>
  ))
);
