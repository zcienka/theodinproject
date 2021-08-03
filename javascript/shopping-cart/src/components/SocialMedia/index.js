import {Wrapper} from './SocialMedia.styles'
import facebook from '../../images/icons/facebook.svg'
import google from '../../images/icons/google.svg'
import instagram from '../../images/icons/instagram.svg'

const SocialMedia = () => (
    <>
        <Wrapper>
            <div id={"filter"}>
                <h3>Our socials</h3>
                <img src={facebook} alt={"Facebook icon"}/>
                <img src={google} alt={"Google icon"}/>
                <img src={instagram} alt={"Instagram icon"}/>
            </div>
        </Wrapper>
    </>
)
export default SocialMedia
