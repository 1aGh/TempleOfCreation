import React, { Component } from 'react';
import PropTypes from 'prop-types';
import theme from './KontaktyTheme.js';
import { withStyles } from '@material-ui/core/styles';
import Envelope from 'Icons/Envelope';
import Stamp from 'Icons/Stamp';
import { Scrollbars } from 'react-custom-scrollbars';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';

import Logo from 'Icons/Logo';

@withStyles(theme)

export default class Kontakty extends Component {
	static propTypes = {
		classes: PropTypes.any,
	};

	render() {
		const {classes} = this.props;

		return (
			<Scrollbars>
				<div className={classes.dialogBar}>
					<div className={classes.title}>Kontakty</div>
				</div>
				<div className={classes.kontaktyWrapper}>
					<Typography variant='title' align='center' color='primary'>{'NAPIŠ NÁM'}</Typography>
					<div className={classes.row}>
						<div className={classes.form}>
							<div className={classes.stamp}><Stamp/></div>
							<Grid container spacing={24} direction='column' alignItems='flex-end'>
								<Grid item container spacing={24} alignItems="center">
									<Grid item xs='3'>
										<Typography variant='caption' color='primary'>{'Kdo nám píše'}</Typography>
									</Grid>
									<Grid item>
										<TextField
											placeholder={'Jméno a příjmení'}
											autoFocus
											// value={this.state.multiline}
											// onChange={this.handleChange('multiline')}
											InputProps={{classes:{underline: classes.input, root: classes.input}}}
										/>
									</Grid>
								</Grid>
								<Grid item container spacing={24} alignItems="center">
									<Grid item xs='3'>
										<Typography variant='caption' color='primary'>{'Tvůj email'}</Typography>
									</Grid>
									<Grid item>
										<TextField
											placeholder={'@'}
											type='email'
											// value={this.state.multiline}
											// onChange={this.handleChange('multiline')}
											InputProps={{classes:{underline: classes.input, root: classes.input}}}
										/>
									</Grid>
								</Grid>
								<Grid item container spacing={24} alignItems="center">
									<Grid item xs='3'>
										<Typography variant='caption' color='primary'>{'Co potřebuješ'}</Typography>
									</Grid>
									<Grid item>
										<TextField
											placeholder={'Předmět emailu'}
											// value={this.state.multiline}
											// onChange={this.handleChange('multiline')}
											InputProps={{classes:{underline: classes.input, root: classes.input}}}
										/>
									</Grid>
								</Grid>
							</Grid>
						</div>
						<div className={classes.contacts}>
							<div className={classes.contactsContainer}>
								<div className={classes.heading}>{'Fakturační údaje'}</div>
								<p>{'Temple of Creation s.r.o.'}</p>
								<p>{'Ostrá 2823/28'}</p>
								<p>{'616 00 Brno, Žabovřesky'}</p>
								<p>{'IČ: 064 37 311'}</p>
								<p>{'DIČ: CZ06437311'}</p>
							</div>
						</div>
					</div>
					<div className={classes.messageContainer}>
						<div className={classes.message}>
							<Typography variant='caption' align='center' color='secondary' gutterBottom>{'Tvoje zpráva'}</Typography>
							<TextField
								id='multiline-flexible'
								multiline
								fullWidth
								placeholder={'Ahoj'}
								// value={this.state.multiline}
								// onChange={this.handleChange('multiline')}
								InputProps={{classes:{root: classes.textField}}}
								margin='normal'
							/>
						</div>
						<div className={classes.envelope}><Envelope/></div>
					</div>
				</div>
			</Scrollbars>
		);
	}
}