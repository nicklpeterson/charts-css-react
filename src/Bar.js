/** @jsx jsx */
import * as React from 'react'
import { css, jsx } from '@emotion/react'
import PropTypes from 'prop-types';
import '../node_modules/charts.css/dist/charts.css';

const getCSS = (props) => {
    const labelSize = props.labelSize ? '--labels-size: ' + props.labelSize + 'px;' : '';
    return css`
    height: ${props.height.toString() + 'px'};
    max-width: ${props.maxWidth.toString() + 'px'};
    margin: ${props.margin.toString().replace(',', ' ')};
    ${labelSize}
  `;
}

const getClassNameString = (props) => {
    let classNames = 'charts-css bar';
    if (props.reverse) {
        classNames += ' reverse';
    }
    if (props.heading) {
        classNames += ' show-heading';
    }
    if (props.showLabels) {
        classNames += ' show-labels';
    }
    if (props.primaryAxis) {
        classNames += ' show-primary-axis';
    }
    if (props.secondaryAxis) {
        classNames += ' show-' + props.secondaryAxis.toString() + '-secondary-axis';
    }
    if (props.dataAxis) {
        classNames += ' show-data-axis';
    }
    if (props.dataSpacing) {
        classNames += ' data-spacing-' + props.dataSpacing.toString();
    }
    if (props.datasetSpacing) {
        classNames += ' datasets-spacing-' + props.datasetSpacing.toString();
    }
    if (props.reverseData) {
        classNames += ' reverse-data';
    }
    if (props.reverseDatasets) {
        classNames += ' reverse-datasets';
    }


    return classNames;
}

const Dataset = (dataset) => {
    if (!dataset.title) {
        dataset.title = '';
    }
    if (!dataset.description) {
        dataset.description = '';
    }
    return (
        <React.Fragment>
            <thead>
            <tr>
                <th scope='row'>{dataset.title}</th>
                <th scope='row'>{dataset.description}</th>
            </tr>
            </thead>
            <tbody>
            {
                dataset.dataEntries.map((dataEntry, index) => {
                    if (!dataEntry.label) {
                        dataEntry.label = '';
                    }
                    return (
                        <tr key={index}>
                            <th scope='row'>{dataEntry.label}</th>
                            <td css={css`--size: + ${dataEntry.entry.toString()}`} />
                        </tr>
                    );
                })
            }
            </tbody>
        </React.Fragment>
    );
}

const Bar = (props) => {
    if (!props.heading) {
        props.heading = '';
    }
    return (
        <table
            className={getClassNameString(props)}
            css={getCSS(props)}
        >
            <caption>{props.heading}</caption>
            {
                props.datasets.map((dataset) => {
                    return Dataset(dataset);
                })
            }
        </table>
    )
}

Bar.propTypes = {
    height: PropTypes.number.isRequired,
    maxWidth: PropTypes.number.isRequired,
    margin: PropTypes.array.isRequired,
    datasets: PropTypes.array.isRequired,
    reverse: PropTypes.bool,
    heading: PropTypes.string,
    dataSpacing: PropTypes.number,
    datasetSpacing: PropTypes.number,
    reverseData: PropTypes.bool,
    reverseDatasets: PropTypes.bool,
    showLabels: PropTypes.bool,
    labelSize: PropTypes.bool,
    primaryAxis: PropTypes.bool,
    secondaryAxis: PropTypes.number,
    dataAxis: PropTypes.bool
};

export default Bar;
