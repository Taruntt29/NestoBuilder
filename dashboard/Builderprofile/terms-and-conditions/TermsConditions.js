import { Card } from "react-bootstrap";
import "./TermsConditions.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBuilderDetail } from "../../../redux/https-requests/builderDetail-http";
const TermsConditions = () => {
  const dispatch = useDispatch();
  const builderData = useSelector(
    (state) => state.builderDetail.details[0]
  ) || {
    email: "",
    phoneNumber: "",
    gst: "",
    companyName: "",
    address: "",
    panOfCompany: "",
    companyType: "",
  };
  // console.log(builderData);
  const builderId = useSelector((state) => state.auth.builderId);

  useEffect(() => {
    dispatch(getBuilderDetail(builderId));
  }, [dispatch]);
  return (
    <>
      <h3 className="mb-2">Terms & Conditions</h3>
      <Card.Text style={{ textAlign: "justify" }}>
        {builderData?.termAndCondition}
        {/* Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
        <br />
        <br />
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
        <br />
        <br />
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, */}
      </Card.Text>
    </>
  );
};

export default TermsConditions;
