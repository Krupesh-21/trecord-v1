import {connect} from "react-redux";
import Records from "../components/pages/Records Page/Records";

const mapStateToProps = state => ({
    formData: state.recordItems
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Records)

// export default FormPage;