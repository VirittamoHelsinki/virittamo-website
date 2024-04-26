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
    <main className="flex min-h-screen flex-col px-[100px]">
    <div id="work" className="flex flex-col gap-10 pt-[9.375rem]">
      <h2 className="text-[6.25rem] font-bold">
        {applyData.data.attributes.applyHeading}
      </h2>
      <Accordion type="single" collapsible className="-mx-[100px]">
        <AccordionItem value="item-1" className="border-t px-[100px]">
          <AccordionTrigger className="text-[3.75rem] font-bold uppercase">
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
      <p className="text-[2.1875rem]">
        {applyData.data.attributes.applyDescription}
      </p>
    </div>
    </main>
  );
}