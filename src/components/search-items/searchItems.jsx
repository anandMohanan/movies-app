import React from 'react';

import Result from '../result/result';

import {SearchItemContainer} from './styles';

const searchItems = ({searchItems , openPage}) => {
    return(
        <SearchItemContainer>
        {searchItems.map((result) => (
            <Result key={result.Year} result={result} openPage={openPage} />
        ))}
        </SearchItemContainer>
    )
}

export default searchItems;