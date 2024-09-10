import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions/get-labels.action";
import { useLabels } from "../hooks/useLabels";

type Props = {
  selectedLabels: string[];
  onLabelSelected: (label: string) => void;
};

export const LabelPicker = ({ selectedLabels, onLabelSelected }: Props) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return <div>cargando labels...</div>;
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {labelsQuery.data?.map((label) => (
        <span
          onClick={() => onLabelSelected(label.name)}
          key={label.id}
          className={`px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer ${
            selectedLabels.includes(label.name) ? "selected-label" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
