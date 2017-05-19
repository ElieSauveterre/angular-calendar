import { Component, Input } from '@angular/core';
export var CalendarMonthViewHeaderComponent = (function () {
    function CalendarMonthViewHeaderComponent() {
    }
    CalendarMonthViewHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-month-view-header',
                    template: "\n    <template #defaultTemplate>\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </template>\n    <template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngOutletContext]=\"{days: days, locale: locale}\">\n    </template>\n  "
                },] },
    ];
    /** @nocollapse */
    CalendarMonthViewHeaderComponent.ctorParameters = function () { return []; };
    CalendarMonthViewHeaderComponent.propDecorators = {
        'days': [{ type: Input },],
        'locale': [{ type: Input },],
        'customTemplate': [{ type: Input },],
    };
    return CalendarMonthViewHeaderComponent;
}());
//# sourceMappingURL=calendarMonthViewHeader.component.js.map