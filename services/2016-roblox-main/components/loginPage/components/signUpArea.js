import { createUseStyles } from "react-jss";
import ActionButton from "../../actionButton";

const useStyles = createUseStyles({
    header: {
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '30px',
    },
    notAMemberText: {
        fontSize: '12px',
        textAlign: 'center',
        marginBottom: '4px',
        marginTop: '20px',
    },
})

const SignUpArea = props => {
    const s = useStyles();
    return <div className='row'>
        <div className='col-12'>
            <p className={s.notAMemberText}>Not a member?</p>
            <h2 className={s.header}>you gotta login my guy ts a invite only</h2>
            <h2 className={s.header}>either that or ask @insanityforeternity on discord to make you a acc</h2>
        </div>
    </div>
}

export default SignUpArea;
