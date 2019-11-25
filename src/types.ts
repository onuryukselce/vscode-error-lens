import * as vscode from 'vscode';

export interface IConfig {
	/**
	 * `useColorContributions` is a temporary option
	 */
	useColorContributions: boolean;

	errorBackground: string;
	errorForeground: string;
	errorMessageBackground: string;

	warningBackground: string;
	warningForeground: string;
	warningMessageBackground: string;

	infoBackground: string;
	infoForeground: string;
	infoMessageBackground: string;

	hintBackground: string;
	hintForeground: string;
	hintMessageBackground: string;

	light: {
		errorBackground: string;
		errorForeground: string;

		warningBackground: string;
		warningForeground: string;

		infoBackground: string;
		infoForeground: string;

		hintBackground: string;
		hintForeground: string;

		errorGutterIconPath?: string;
		warningGutterIconPath?: string;
		infoGutterIconPath?: string;

		errorGutterIconColor: string;
		warningGutterIconColor: string;
		infoGutterIconColor: string;
	};

	fontFamily: string;
	fontWeight: string;
	fontSize: string;
	fontStyleItalic: boolean;

	margin: string;
	enabledDiagnosticLevels: string[];
	annotationPrefix: string[];
	addAnnotationTextPrefixes: boolean;
	exclude: string[];

	delay?: number;

	followCursor: FollowCursor;
	followCursorMore: number;

	onSave: boolean;

	editorActiveTabDecorationEnabled: boolean;
	editorActiveTabErrorBackground?: string;
	editorActiveTabWarningBackground?: string;

	gutterIconsEnabled: boolean;
	gutterIconSize: string;
	gutterIconSet: GutterIconSet;

	errorGutterIconPath?: string;
	warningGutterIconPath?: string;
	infoGutterIconPath?: string;

	errorGutterIconColor: string;
	warningGutterIconColor: string;
	infoGutterIconColor: string;
}

export type GutterIconSet = 'default' | 'defaultOutline' | 'borderless' | 'circle';
export type FollowCursor = 'allLines' | 'activeLine' | 'closestProblem';

export interface IAggregatedDiagnostics {
	[key: string]: vscode.Diagnostic[];
}

export interface IGutter {
	iconSet: GutterIconSet;

	errorIconPath: string;
	errorIconPathLight: string;

	warningIconPath: string;
	warningIconPathLight: string;

	infoIconPath: string;
	infoIconPathLight: string;
}
