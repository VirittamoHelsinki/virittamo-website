import { api } from "~/utils/api";
import { useLang } from "~/utils/lang-provider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/@/components/ui/accordion";

export default function ApplyToWork() {
  const { locale } = useLang();
  const { data: applyData, isLoading: isApplyLoading } =
    api.home.getPage.useQuery({ lang: locale });
  const { data: criterionData, isLoading: isCriterionLoading } =
    api.home.getCriterion.useQuery({ lang: locale });
  if (
    isApplyLoading ||
    isCriterionLoading ||
    !applyData ||
    !criterionData
  )
    return;
  return (
    <main className="flex min-h-screen flex-col px-[100px] mx-[245px]">
    <div id="work" className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[3.25rem]">
        {applyData.data.attributes.applyHeading}
      </h2>
      <Accordion type="single" collapsible className="">
        <AccordionItem value="item-1" className="border-t">
          <AccordionTrigger className="text-[3.25rem] uppercase">
            {criterionData.data.attributes.criterion.name}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-[1.875rem] leading-tight">
            <h3 className="text-[2.5rem] font-medium">
              {criterionData.data.attributes.criterion.heading}
            </h3>
            <ul className="grid grid-cols-2 gap-10">
              {criterionData.data.attributes.criterion.criterionList.map(
                (criterion, index) => (
                  <li key={index}>
                    <p className="text-[1.875rem] font-medium">
                      {criterion.name}
                    </p>
                    <ul className="flex max-w-[678px] list-inside list-disc flex-col gap-[10px] text-[1.875rem]">
                      {criterion.item.map((crit, index) => (
                        <li key={index}>{crit.name}</li>
                      ))}
                    </ul>
                  </li>
                ),
              )}
            </ul>
            <p className="max-w-[1010px] pt-10 text-[1.875rem] font-medium">
              {criterionData.data.attributes.criterion.note}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <hr className="border-black"></hr>
      <p className="text-[2.1875rem]">
        {applyData.data.attributes.applyDescription}
      </p>
      <div className="flex flex-col gap-10">
          <h1 className="text-[2.75rem]">
            {applyData.data.attributes.applyHeading}
          </h1>
          <p className="text-[1.675rem]">
            {applyData.data.attributes.applyDescription}
          </p>
          <figure className="max-h-4xl">
            {/* <Image
              className="h-[400px] rounded-xl object-cover"
              src={companyData.data.attributes.img.data.attributes.url}
              alt="Picture of the author"
              width={2000}
              height={2000}
            /> */}
            <img
              src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
              alt="Bold typography"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 175,
                backgroundColor: 'var(--gray-5)',
              }}
            />
          </figure>
          <h1 className="text-[2rem]">
            {applyData.data.attributes.applyHeading}
          </h1>
          <p className="text-[1.675rem]">
            {applyData.data.attributes.applyDescription}
          </p>
          <h1 className="text-[2rem]">
            {applyData.data.attributes.applyHeading}
          </h1>
          <p className="text-[1.675rem]">
            {applyData.data.attributes.applyDescription}
          </p>
          <h1 className="text-[2rem]">
            {applyData.data.attributes.applyHeading}
          </h1>
          <p className="text-[1.675rem]">
            {applyData.data.attributes.applyDescription}
          </p>
        </div>
    </div>
    </main>
  );
}