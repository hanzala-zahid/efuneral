import { Person } from "@efuneral/models";
import { SectionDescriptionBlock } from "@efuneral/ui/basic-components";
import { BeneficiariesForm, HealthHistoryForm, InsuredDemographicsForm, IrrevocabilityForm, OwnerDemographicsForm, PaymentMethodForm, PaymentOptionForm, ReplacementForm } from "@efuneral/ui/forms";
import { useState } from "react";
import { useAllSearchParams } from "../../../reuseable-logic/url-helpers";
import { PagePath } from "../../../static/enums/PagePaths";

export function LoadSalesOrderPage() {
  // Get sales order id
  const { salesOrderId } = useAllSearchParams(PagePath.LOAD_SALES_ORDER_PAGE);
  // Track form values
  const [insuredDemographicsFormValues, setInsuredDemographicsFormValues] = useState<Person>({})
  const [insuredDemographicsFormEditing, setInsuredDemographicsFormEditing] = useState(true);

  const [ownerDemographicsFormValues, setOwnerDemographicsFormValues] = useState<Person>({})
  const [ownerDemographicsFormEditing, setOwnerDemographicsFormEditing] = useState(true);

  // Render
  return (
    <>
      <SectionDescriptionBlock
        sectionTitle="Contact Information"
        sectionDescription="Let's gather some contact information from you for each of the individuals associated with this policy."
      />
      <InsuredDemographicsForm
        values={insuredDemographicsFormValues}
        onSave={(data) => {
          setInsuredDemographicsFormValues(data);
          setInsuredDemographicsFormEditing(false);
        }}
        ariaLabelPrefix={""}
        summaryMode={!insuredDemographicsFormEditing}
        onEditClick={() => setInsuredDemographicsFormEditing(true)}
      />
      <OwnerDemographicsForm
        values={ownerDemographicsFormValues}
        onSave={(data) => {
          setOwnerDemographicsFormValues(data);
          setOwnerDemographicsFormEditing(false);
        }}
        ariaLabelPrefix={"owner"}
        summaryMode={!ownerDemographicsFormEditing}
        onEditClick={() => setOwnerDemographicsFormEditing(true)}
      />
      <SectionDescriptionBlock
        sectionTitle="Payment Information"
        sectionDescription="Please provide all of the necessary payment information below to ensure you've established the payment plan that works best."
      />
      <PaymentOptionForm
        availablePaymentOptions={[]}
        values={null}
        onSave={() => { return }}
        ariaLabelPrefix={""}
        summaryMode={false}
        onEditClick={() => { return }}
      />
      <PaymentMethodForm
        values={{}}
        onSave={() => { return }}
        ariaLabelPrefix={""}
        summaryMode={false}
        onEditClick={() => { return }}
      />
      <SectionDescriptionBlock
        sectionTitle="Additional Information"
        sectionDescription="Only a few more details we need to gather from you. Once you've completed this section, you can finalize the purchase."
      />
      <BeneficiariesForm
        values={[]}
        onSave={() => { return }}
        ariaLabelPrefix={""}
        summaryMode={false}
        onEditClick={() => { return }}
      />
      <IrrevocabilityForm
        values={{}}
        onSave={() => { return }}
        ariaLabelPrefix={""}
        summaryMode={false}
        onEditClick={() => { return }}
      />
      <HealthHistoryForm
        values={{}}
        onSave={() => { return }}
        ariaLabelPrefix={""}
        summaryMode={false}
        onEditClick={() => { return }}
      />
      <ReplacementForm
        values={{}}
        onSave={() => { return }}
        ariaLabelPrefix={""}
        summaryMode={false}
        onEditClick={() => { return }}
      />
    </>
  );
}

export default LoadSalesOrderPage;
