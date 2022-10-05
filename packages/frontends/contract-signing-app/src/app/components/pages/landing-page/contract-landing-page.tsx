import { BaseButton } from "@efuneral/ui/basic-components";
import { useAllSearchParams, useNavigateToPath } from "../../reuseable-logic/url-helpers";
import { PagePath } from "../../static/enums/PagePaths";


export function ContractLandingPage() {
  // Get params
  const params = useAllSearchParams(PagePath.CONTRACT_SIGNING_LANDING_PAGE);
  const navigateToContractSigningPage = useNavigateToPath(PagePath.CONTRACT_SIGNING_PAGE, {
    signingCredential: params.signingCredential
  });
  // Render
  return (
    <div>
      Contract Landing Credential: {params.signingCredential}
      <br />
      <BaseButton 
        ariaLabel={"navigate"} 
        onClick={navigateToContractSigningPage}
      >
        Navigate to Contract Signing Page
      </BaseButton>
    </div>);
}