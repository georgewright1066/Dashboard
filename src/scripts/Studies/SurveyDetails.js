<div className="show-study__container">
<StudyDetails
 methodology={this.props.isolationData.methodology }
 brief={this.props.isolationData.brief}
 studyName={this.props.isolationData.study_name}
 />
 <div className="show-study__mini-card-container">
 {this.props.isolationData.has_demographics ?
 <MiniCardDownload
 href={`/study/${this.props.match.params.id}/demographics`}
 link={true}
 copy="View Demographic data"
 className="mini-card__psuedo"
 /> : null
}
{this.props.isolationData.has_survey ?
 <MiniCardDownload
 href={`/study/${this.props.match.params.id}/survey-questions`}
 link={true}
 copy="View Survey data"
 className="mini-card__psuedo mini-card__psuedo--survey"
 /> :
 null
}
<MiniCardDownload
 href={`/study/${this.props.match.params.id}/cell_step_management`}
 link={true}
 copy="View Survey data"
 className="mini-card__psuedo mini-card__psuedo--survey"
 />

 </div>
