export interface PISearchResults{
    PrimaryQueryResult: IPrimaryQueryResult;
}

export interface IPrimaryQueryResult{
    RelevantResults: IRelevantResult;
}

export interface IRelevantResult{
    Table: ITable;
}

export interface ITable{
    Cells: Array<ICells>;
}

export interface ICells{
    Cells: Array<ICellValue>;
}

export interface ICellValue{
    Key: string;
    Value: string;
    ValueType: string;
}