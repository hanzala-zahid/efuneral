import { StylingConfiguration } from "../../models/styling/StylingConfiguration";
import { constructRecoilUseStateFunction } from "../../recoil/reuseable-logic/generic-recoil-constructor";

export const useStylingConfiguration = constructRecoilUseStateFunction<StylingConfiguration>('stylingConfiguration', {
    subdomain: null
})
