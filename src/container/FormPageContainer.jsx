import {connect} from "react-redux";
import FormPage from "../components/forms/FormPage";
import {saveRecord} from "../services/Actions/actions";

const mapStateToProps = state => ({
    formData: state.recordItems
})

const mapDispatchToProps = dispatch => ({
    recordDataHandler: data => dispatch(saveRecord(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormPage)

// export default FormPage;