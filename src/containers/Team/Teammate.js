import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import theme from './TeamTheme.js';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import CancelIcn from 'Icons/Close';
import { Scrollbars } from 'react-custom-scrollbars';

@withStyles(theme)

export default class Team extends Component {
	static propTypes = {
		classes: PropTypes.any,
		teammate: PropTypes.any,
		handleClose: PropTypes.any,
	};

	render() {
		const {classes, teammate, handleClose} = this.props;
		console.log('TEAMMATE:: ', teammate);
		let name = teammate && teammate.name ? teammate.name : '';
		let id = teammate && teammate.id ? teammate.id : '';
		let jednatel = teammate && teammate.jednatel ? teammate.jednatel : false;
		let age = () => {
			let birth = teammate && teammate.age ? new Date(teammate.age) : new Date();
			let cur = new Date();
			return cur.getFullYear() - birth.getFullYear();
		};
		let about = teammate && teammate.about ? teammate.about : '';
		let prof = teammate && teammate.prof ? teammate.prof : '';
		let study = teammate && teammate.study ? teammate.study : [];
		let exp = teammate && teammate.exp ? teammate.exp : [];
		let hobby = teammate && teammate.hobby ? teammate.hobby : [];
		let lang = teammate && teammate.lang ? teammate.lang : [];
		let skills = teammate && teammate.skills ? teammate.skills : {};

		let absplit = about.split('</br>');
		let abcontent = [];
		absplit.map((sen) => {
			abcontent.push(<p key={'sen'+abcontent.length}>{sen}</p>);
		});

		let studycontent = [];
		study.map((st) => {
			studycontent.push(<li key={'st'+studycontent.length} className={classes.litem}>{st}</li>);
		});

		let expcontent = [];
		exp.map((ex) => {
			expcontent.push(<li key={'ex'+expcontent.length} className={classes.litem}>{ex}</li>);
		});

		let hobbycontent = [];
		hobby.map((hob) => {
			hobbycontent.push(<div key={hob+hobbycontent.length}>{hob}</div>);
		});

		let langcontent = [];
		lang.map((lan) => {
			langcontent.push(<div key={lan+langcontent.length}>{lan}</div>);
		});

		let skillscontent = [];
		Object.keys(skills).map((sk) => {
			let skArray = [];
			skArray.push(<div key={sk+skArray.length} style={{fontWeight: '600'}}>{sk+':'}</div>);
			skills[sk].map((i) => {
				skArray.push(<div key={i+skArray.length}>{i}</div>);
			});

			skillscontent.push(<div key={sk+'array'+skillscontent.length} className={classes.skill}>{skArray}</div>);
		});

		return (
			<div className={classes.teammateWrapper}>
				<div className={classes.dialogBar + ' ' + classes.closeBar}>
					<IconButton className={classes.cancelBtn + ' ' + classes.cancelSand} onClick={handleClose}>
						<CancelIcn className={classes.closeIcn + ' ' + classes.cancelSand}/>
					</IconButton>
				</div>
				<Scrollbars
					className={classes.scrollbars}
					renderTrackHorizontal={props => <div {...props} style={{display:'none'}}/>}
					renderThumbHorizontal={props => <div {...props} style={{display:'none'}}/>}
					>
					<Grid container spacing={40} className={classes.teamContainer}>
						{/* MAIN INFO */}
						<Grid item xs={'auto'}>
							<div className={classes.teamPhoto} style={{backgroundImage: 'url(api/store/static/'+id+'.png)'}}/>
						</Grid>
						<Grid item xs>
							<div className={classes.mainInfo}>
								<div className={classes.teamName}>{name}</div>
								<div>{age()+' let'}</div>
								<div className={classes.teamDivider}>{'/'}</div>
								<div>{prof}</div>
								{jednatel && <div>{'Jednatel společnosti'}</div>}
							</div>
						</Grid>
						{/* ABOUT */}
						<Grid item xs={12}>
							<div className={classes.teamAbout}>{abcontent}</div>
						</Grid>
						{/* EXPIRIENCE AND HOBBY */}
						{/* LEFT CONTAINER */}
						<Grid container direction={'column'} item xs={8}>
							<Grid container item xs style={{flex: '1 1 auto'}}>
								<div className={classes.dotWrapper} style={{marginBottom: '40px'}}>
									<p>{'Vzdělání'}</p>
									<ul className={classes.list}>
										{studycontent}
									</ul>
								</div>
							</Grid>
							<Grid container item xs style={{flex: '1 1 auto'}}>
								<div className={classes.dotWrapper}>
									<p>{'Zkušenosti'}</p>
									<ul className={classes.list}>
										{expcontent}
									</ul>
								</div>
							</Grid>
						</Grid>
						{/* RIGHT CONTAINER */}
						<Grid container direction={'column'} item xs={4}>
							<Grid container item xs style={{flex: '1 1 auto'}}>
								<div className={classes.dotWrapper + ' ' + classes.hobbyContainer} style={{marginBottom: '40px'}}>
									<div className={classes.miniTitle}>{'Záliby'}</div>
									{hobbycontent}
								</div>
							</Grid>
							<Grid container item xs style={{flex: '1 1 auto'}}>
								<div className={classes.dotWrapper + ' ' + classes.hobbyContainer}>
									<div className={classes.miniTitle}>{'Jazyky'}</div>
									{langcontent}
								</div>
							</Grid>
						</Grid>
						{/* SKILLS */}
						<Grid container direction={'row'} item xs={12}>
							<div className={classes.skillWrapper}>
								<div className={classes.skillsTitle}>
									<img src={'api/store/static/skills.svg'} width={'150px'}/>
									<div className={classes.miniTitle}>{'Dovednosti'}</div>
								</div>
								<div className={classes.skillsContainer}>{skillscontent}</div>
							</div>
						</Grid>
					</Grid>
				</Scrollbars>
			</div>
		);
	}
}