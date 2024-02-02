import {
    makeStyles,
    shorthands,
    DataGridHeaderCell,
    DataGridBody,
    DataGridCell,
    DataGridHeader,
    DataGridRow,
    DataGrid,
    TableColumnDefinition,
    TableCellLayout,
    createTableColumn,
} from '@fluentui/react-components';
import React from 'react';

const useStyles = makeStyles({
    root: {
        fontSize: '16px',
        maxWidth: '800px',
        ...shorthands.margin('1em'),
    },
});

export type ReproItem = {
    name: string;
    value: string;
};

const columns: TableColumnDefinition<ReproItem>[] = [
    createTableColumn<ReproItem>({
        columnId: 'name',
        compare: (a, b) => a.name.localeCompare(b.name),
        renderCell: (result) => {
            return (
                <TableCellLayout>
                    <span>{result.name}</span>
                </TableCellLayout>
            );
        },
        renderHeaderCell: () => {
            return 'Name';
        },
    }),
    createTableColumn<ReproItem>({
        columnId: 'value',
        compare: (a, b) =>
            JSON.stringify(a.value).localeCompare(JSON.stringify(b.value)),
        renderCell: (result) => {
            return <span>{result.value}</span>;
        },
        renderHeaderCell: () => {
            return 'Value';
        },
    }),
];

function App() {
    const [items, setItems] = React.useState<ReproItem[]>([]);
    const styles = useStyles();

    React.useEffect(() => {
        setItems([
            {
                name: 'simple',
                value: 'cookie',
            },
            {
                name: 'AAA BBB CCC DDD EEE FFF GGG HHHH III JJJ KKK LLL MMM NNN OOO PPP',
                value: 'worcestershire',
            },
        ]);
    });

    return (
        <div className={styles.root}>
            <DataGrid
                items={items}
                columns={columns}
                focusMode='none'
                size='medium'
            >
                <DataGridHeader>
                    <DataGridRow>
                        {(col) => {
                            return (
                                <DataGridHeaderCell key={col.columnId}>
                                    {col.columnId}
                                </DataGridHeaderCell>
                            );
                        }}
                    </DataGridRow>
                </DataGridHeader>
                <DataGridBody<ReproItem>>
                    {({ item, rowId }) => {
                        return (
                            <DataGridRow
                                key={rowId}
                                style={{
                                    paddingTop: '1em',
                                    paddingBottom: '1em',
                                }}
                            >
                                {(col) => (
                                    <DataGridCell>
                                        {col.renderCell(item)}
                                    </DataGridCell>
                                )}
                            </DataGridRow>
                        );
                    }}
                </DataGridBody>
            </DataGrid>
        </div>
    );
}

export default App;
