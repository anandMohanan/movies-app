import React from 'react';

import { ResultContainer , ImageContainer , HeadingContainer } from './styles';

const Result = ({result , openPage}) => {
    return(
        <ResultContainer onClick={() => openPage(result.imdbID)}>
            <ImageContainer src={result.Poster} />
            <HeadingContainer>{result.Title} </HeadingContainer>
        </ResultContainer>
    )
}

export default Result;