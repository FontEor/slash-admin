import { useState } from "react";
import { toast } from "sonner";

// ----------------------------------------------------------------------

type CopiedValue = string | null;

type CopyFn = (text: string) => Promise<boolean>;

type ReturnType = {
	copyFn: CopyFn;
	copiedText: CopiedValue;
};

export default function useCopyToClipboard(): ReturnType {
	const [copiedText, setCopiedText] = useState<CopiedValue>(null);

	const copyFn: CopyFn = async (text) => {
		if (!navigator?.clipboard) {
			return false;
		}

		// Try to save to clipboard then save it in the state if worked
		try {
			await navigator.clipboard.writeText(text);
			setCopiedText(text);
			toast.success("Copied!");
			return true;
		} catch (error) {
			setCopiedText(null);
			return false;
		}
	};

	return { copiedText, copyFn };
}
