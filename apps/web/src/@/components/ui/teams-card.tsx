import { useState } from "react";
import { Box, Card, Inset, Text, Strong } from "@radix-ui/themes";
import { Wave } from "../icons";
import { ChevronDown, ChevronUp } from "lucide-react";
import { translations } from "~/utils/translations";
import { useLang } from "~/utils/lang-provider";
import { Img } from "~/server/api/routers/home";

const TeamsCard = ({ teamName, description, teamImg }: { teamName: string; description: string; teamImg: Img }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const { locale } = useLang();
  const {
    more,
    less,
  } = translations[locale];

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden relative max-w-sm card-shadow">
      <Box onClick={() => {
        if ((!showFullDescription && description.length > 200) || showFullDescription) {
          toggleDescription();
        }
      }}>
        <Card>
          <Inset clip="padding-box" side="top" pb="current">
            <img
              src={teamImg.data.attributes.url}
              alt="Bold typography"
              style={{
                display: 'block',
                objectFit: 'cover',
                width: '100%',
                height: 175,
                backgroundColor: 'var(--gray-5)',
              }}
            />
            <Wave className="wave-position fill-[white]" />
          </Inset>
          <h2 className="text-[2.5rem] p-1 pl-[0.6rem]">{teamName}</h2>
          <Text className="p-3" as="p" size="3">
            {showFullDescription ? description : description.slice(0, 200) + (description.length > 200 ? '...' : '')}
          </Text>
          <div className="flex justify-end mt-2 p-2">
            {!showFullDescription && description.length > 200 && (
              <Strong
                className="text-black cursor-pointer"
                onClick={toggleDescription}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {more}
                  <span><ChevronDown /></span>
                </span>
              </Strong>
            )}
            {showFullDescription && (
              <Strong
                className="text-black cursor-pointer"
                onClick={toggleDescription}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {less}
                  <span><ChevronUp /></span>
                </span>
              </Strong>
            )}
          </div>
        </Card>
      </Box>
    </div>
  );
}

export { TeamsCard };
