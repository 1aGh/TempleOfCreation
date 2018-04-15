import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './PortfolioPageTheme.js';
import { withStyles } from 'material-ui/styles';
import { Scrollbars } from 'react-custom-scrollbars';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';

import CancelIcn from '@material-ui/icons/Clear';

@withStyles(theme)

export default class PortfolioPage extends Component {
	static propTypes = {
		classes: PropTypes.any,
		project: PropTypes.any,
		handleClose: PropTypes.any,
	};

	render() {
		const {classes, project, handleClose} = this.props;

		let title = project && project.title ? project.title : '';
		let autor = project && project.autor ? project.autor : '';
		let year = project && project.year ? project.year : '';
		let description = project && project.description ? project.description : '';
		let id = project && project.id ? project.id : '';
		return (
			<div className={classes.dialogWrapper} style={{backgroundImage: 'url(src/containers/App/pattern.png)'}}>
				<div className={classes.dialogBar}>
					<Typography variant='title' align='center' color='textSecondary'>{title}</Typography>
					<IconButton className={classes.cancelBtn} onClick={handleClose}>
						<CancelIcn/>
					</IconButton>
				</div>
				<Scrollbars>
					<div className={classes.contentContainer}>
							<div className={classes.infoWrapper}>
								<div className={classes.titleWr + ' ' + classes.border}>{title}</div>
								<div className={classes.row}>
									<div className={classes.thCell}>{'Autor: '}</div>
									<div className={classes.cell}>{autor}</div>
								</div>
								<div className={classes.row}>
									<div className={classes.thCell}>{'Rok: '}</div>
									<div className={classes.cell}>{year}</div>
								</div>
								<div className={classes.description + ' ' + classes.border}>
									<div className={classes.descTitle}>{'Popis:'}</div>
									<div className={classes.desc}>{description}</div>
								</div>
							</div>
							<div className={classes.photoRow}>
								<div className={classes.photo} style={{background: 'url(/store/images/'+id+'_1.png) center/cover'}}/>
								<div className={classes.photo} style={{background: 'url(/store/images/'+id+'_2.png) center/cover'}}/>
							</div>
							<div className={classes.photo}>
								<img height='100%' width='100%' src={'/store/images/'+id+'_3.png'}/>
							</div>
							<div className={classes.photoRow}>
								<div className={classes.photo} style={{background: 'url(/store/images/'+id+'_4.png) center/cover'}}/>
								<div className={classes.photo} style={{background: 'url(/store/images/'+id+'_5.png) center/cover'}}/>
							</div>
					</div>
			</Scrollbars>
			</div>
		);
	}
}