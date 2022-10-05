import { useAllSearchParams } from "../../reuseable-logic/url-helpers";
import { PagePath } from "../../static/enums/PagePaths";

export function ContractSigningPage() {
  // Get signing credential
  const params = useAllSearchParams(PagePath.CONTRACT_SIGNING_PAGE);
  // Render
  return (
    <div>
      Sign Contract Signing Credential: {params.signingCredential}
    </div>
  );
}

export default ContractSigningPage;
